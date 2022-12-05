import _ from 'lodash';
import { BannerService } from '../services';

export const getAll = async (req, res) => {
    try {
        const category = await BannerService.getAll();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'khong co don nao',
        });
    }
};

export const getById = async (req, res) => {
    try {
        const category = await BannerService.getById(req.params.id);
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'khong tim thay don nao',
        });
    }
};

export const create = async (req, res) => {
    try {
        const category = await BannerService.create(req.body);
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'khong them duoc',
        });
    }
};

export const removeById = async (req, res) => {
    try {
        await BannerService.removeById(req.params.id);
        const dataDeleted = await BannerService.getById(req.params.id, { deleted: true });
        res.json(dataDeleted);
    } catch (error) {
        res.status(400).json({
            error: 'khong xoa duoc',
        });
    }
};

export const removeByIds = async (req, res) => {
    try {
        BannerService.removeByIds(req.body.ids).then(async () => {
            //when remove succes check ids length = 1 => return data
            if (_.get(req.body.ids, 'length', 0) === 1) {
                const dataDeleted = await BannerService.getById(req.body.ids[0], { deleted: true });
                res.json(dataDeleted);
                return;
            }
            res.json({});
        });
    } catch (errors) {
        res.status(400).json({
            message: 'Đã có lỗi xảy ra xóa thất bại',
            errors,
        });
    }
};

export const updateById = async (req, res) => {
    try {
        const category = await BannerService.updateById(req.params.id, req.body);
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'khong sua duoc',
        });
    }
};
