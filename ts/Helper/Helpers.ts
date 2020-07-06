export class Helpers {

    public static hienThiLoaiTien(giaTien: number, kyHieuTien: string, viTri: string = "left" ) : string {
        let abc = "";
        if(viTri == "left"){
            abc = kyHieuTien + " " + giaTien;
        }else if(viTri == "right"){
            abc = giaTien + " " + kyHieuTien;
        }
        return abc;
    }

    public static Validate(value: number): boolean{
        if(value>0){
            return true;
        }
        else return false;
    }

    public static kiemTraSoLuong(bienGiDo: number): boolean{
        if(Helpers.Validate(bienGiDo)==false){
            return false;
        }
        return true;
    }
}