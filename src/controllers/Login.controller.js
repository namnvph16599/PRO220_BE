import { accountServices } from '../services';
import bcyrpt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateAccessToken, generateRefreshToken } from '../utils/Token';

export const login = async (req, res) => {
    try {
        const Number_Phone = await accountServices.getPhone(req.body.number_phone);
        if (!Number_Phone) {
            return res.json({
                message: 'số điện thoại chưa tồn tại',
            });
        }
        const comparePassword = bcyrpt.compareSync(req.body.password, Number_Phone.password);
        if (!comparePassword) {
            return res.json({
                message: 'mật khẩu sai vui lòng nhập lại',
            });
        }
        const accessToken = generateAccessToken(Number_Phone);
        const refreshToken = generateRefreshToken(Number_Phone);

        res.cookie('refreshToken', refreshToken, {
            sameSite: 'strict',
            path: '/',
            expires: new Date(new Date().getTime() + 100 * 1000),
            httpOnly: true,
        });
        return res.status(200).json({
            accessToken,
        });
    } catch (error) {
        res.status(404).json({
            message: error,
        });
    }
};
export const requestRefreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    console.log(refreshToken);
    if (!refreshToken) return res.status(401).json('you`re not authenticate');
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (error, user) => {
        if (error) {
            return res.status(401).json({
                message: 'Token is not valid!',
            });
        }
        const newAccessToken = user;
        const newRefreshToken = generateRefreshToken(user);
        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: false,
            path: '/',
            sameSite: 'strict',
        });
        return res.status(200).json({ newAccessToken, refreshToken });
    });
};

export const logout = (req, res) => {
    res.clearnCookie('refreshToken');
};
