"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helpers = void 0;
class Helpers {
    static hienThiLoaiTien(giaTien, kyHieuTien, viTri = "left") {
        let abc = "";
        if (viTri == "left") {
            abc = kyHieuTien + " " + giaTien;
        }
        else if (viTri == "right") {
            abc = giaTien + " " + kyHieuTien;
        }
        return abc;
    }
    static Validate(value) {
        if (value > 0) {
            return true;
        }
        else
            return false;
    }
    static kiemTraSoLuong(bienGiDo) {
        if (Helpers.Validate(bienGiDo) == false) {
            return false;
        }
        return true;
    }
}
exports.Helpers = Helpers;
