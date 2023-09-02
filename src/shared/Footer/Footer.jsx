import logo from "../../assets/logo_flat.png";
import google_play from "../../assets/footerImage/btn_google_play.svg";
import sslWirelsss from "../../assets/footerImage/ssl-wireless.jpg"
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="pt-5"
        style={{ backgroundColor: "#d6d6d4" }}>
            <footer>
                <div
                    className="container-fluid pb-3"
                >
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="footer-img">
                                    <img className="img" src={logo} alt="" />
                                </div>
                                <div>
                                    <p className="text_color_gray pt-4 font-16 footer-text">
                                        মজারু একটি ই-লার্নিং প্লাটফর্ম। মজারু মানে মজার শিক্ষাগুরু। মজারু হাজির হয়েছে পড়াশোনার এক আনন্দময় জগৎ নিয়ে। মজারু কাজ করছে শিশুদের ব্রেইন আর স্কিল ডেভেলপমেন্ট নিয়ে। ফোর্থ ইন্ডাস্ট্রিয়াল রেভ্যুলেশনের চ্যালেঞ্জ মোকাবেলায় একঝাঁক দক্ষ জনগোষ্ঠী তৈরি করাই মজারুর লক্ষ্য। দরকার শুধু ইন্টারনেট সংযোগ, মোবাইল বা ল্যাপটপ।
                                    </p>
                                </div>
                                <div className="footer-img">
                                    <a
                                        target="_blank"
                                        className="text-decoration-none"
                                        href=""
                                        title="Go to facebook page"
                                    >
                                        <i className="fa-brands fa-facebook text_color_gray fa-facebook"></i>
                                    </a>
                                    <a
                                        target="_blank"
                                        className="text-decoration-none"
                                        href=""
                                        title="Go to instagram page"
                                    >
                                        <i className="fa-brands fa-instagram text_color_gray fa-instagram ps-3"></i>
                                    </a>
                                    <a
                                        target="_blank"
                                        className="text-decoration-none"
                                        href=""
                                        title="Go to youtube page"
                                    >
                                        <i className="fa-brands fa-youtube text_color_gray fa-youtube ps-3"></i>
                                    </a>
                                    <a
                                        target="_blank"
                                        className="text-decoration-none"
                                        href=""
                                        title="Go to linkdein page"
                                    >
                                        <i className="fa-brands fa-linkedin text_color_gray fa-linkedin ps-3"></i>
                                    </a>
                                    <a
                                        target="_blank"
                                        className="text-decoration-none"
                                        href=""
                                        title="Go to tiktok page"
                                    >
                                        <i className="fa-brands fa-tiktok ps-3 text_color_gray ps-3"></i>
                                    </a>

                                    <a
                                        target="_blank"
                                        className="text-decoration-none"
                                        href=""
                                        title="Go to tiktok page"
                                    >
                                        <i className="fa-brands fa-whatsapp ps-3 text_color_gray ps-3"></i>
                                    </a>
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="d-flex justify-content-center">
                                    <div>
                                        <h4 className="text-white fw-bold mt-3">এক্সপ্লোর</h4>
                                        <div className="pt-4">
                                            <a href="">আমাদের সম্পর্কে</a>
                                        </div>
                                        <div className="pt-3">
                                            <a href="">সেবা পাওয়ার শর্ত</a>
                                        </div>
                                        <div className="pt-3">
                                            <a href="">সাধারণ জিজ্ঞাসা</a>
                                        </div>
                                        
                                        <div className="pt-3">
                                            <a href="">ই-বুক</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="d-flex justify-content-center">
                                    <div>
                                        <h4 className="text-white fw-bold mt-3">সহায়তা</h4>
                                        <div className="pt-4">
                                            <a href="">রিফান্ড এবং রিটার্ন নীতি</a>
                                        </div>
                                        <div className="pt-3">
                                            <a href="">গোপনীয়তা নীতি</a>
                                        </div>
                                        <div className="pt-3">
                                            <a href="">ব্লগ</a>
                                        </div>
                                        
                                        <div className="pt-3">
                                            <a href="">যোগাযোগ করুন</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="d-flex justify-content-center">
                                    <div>
                                        <h4 className="text-white fw-bold mt-3 footer-img">ডাউনলোড</h4>
                                        <a
                                            target="_blank"
                                            className="text-decoration-none"
                                            href=""
                                            title="Go to google play"
                                        >
                                            <img src={google_play} alt="example" style={{ height: '50px', marginTop: '24px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center bg-dark py-3 mb-0" style={{ color: "#9B9B9B" }}>
                        কপিরাইট ২০২৩ © মজারু এডুকেশন টেকনোলজিস লিমিটেড
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

