import jwt from 'jsonwebtoken';
export const generateAccessToken = (data) => {
    return jwt.sign(
        {
            id: data.id,
            name: data.name,
            role: data.role,
        },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: '20s' },
    );
};

export const generateRefreshToken = (data) => {
    return jwt.sign(
        {
            id: data.id,
            name: data.name,
            role: data.role,
        },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: '30d' },
    );
};
