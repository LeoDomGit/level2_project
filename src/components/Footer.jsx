import React from 'react'
import"../css/footer.css";
function Footer() {
  return (
    <>
      <div className="row bg-dark text-light footer mt-3" style={{"minHeight":"300px"}}>
        <div className="container pt-5" style={{'width':'80%','margin':'0px auto','paddingBottom':"2%"}}>
          <div className="row w-100">
          <div className="col-md-4">
<p>
Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.
</p>
        </div>
        <div className="col-md-5">
          <ul style={{'listStyle':"none"}}>
            <li><a href={'#'}>Thông tin</a></li>
            <li><a href={'#'}>Tin tức</a></li>
            <li><a href={'#'}>Giới thiệu</a></li>
            <li><a href={"#"}>Check IMei</a></li>
            <li><a href={"#"}>Phương thức thanh toán</a></li>
            <li><a href={"#"}>Thuê điểm bán lẻ</a></li>
            <li><a href={"#"}>Bảo hành sửa chữa</a></li>
            <li><a href={"#"}>Tuyển dụng</a></li>
          </ul>
        </div>
        <div className="col-md-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.443592406523!2d106.62525347592825!3d10.853826357759477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1694417983279!5m2!1svi!2s" style={{"width":"100%" ,'height':"250px","style":"border:0;"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
