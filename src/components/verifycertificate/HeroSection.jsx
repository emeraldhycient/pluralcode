import { useState, useEffect } from "react";
import "./hero.css";
import CertificateData from "./CertificateData";
import axios from "axios";
import InvalidCert from "./InvalidCert";

function HeroSection() {

  const urlParams = new URLSearchParams(window.location.search);

  const [certId, setcertId] = useState(urlParams.get('cert_id') || "")

  const [certData, setcertData] = useState("")

  const [isValidCertificate, setisValidCertificate] = useState(true)

  const getCertificate = async () => {
    try {
      const res = await axios.get(`https://pluralcode.net/apis/v1/verify_certificate.php?cert_id=${certId}`);
      // console.log(res.data);
      setcertData(res.data)
      if (res?.data?.statuscode === "01") {
        setisValidCertificate(false)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCertificate();
  }, [certId])



  return (
    <>
      <section className="h-fit  lg:h-screen w-screen pb-20 md:pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 w-full md:w-11/12 mx-auto h-full w-full">
          <div
            className="col-span-2 h-fit lg:h-screen flex flex-col justify-center items-center text-left w-full align-left mt-6 lg:-mt-8"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1 className="w-[85%] md:w-[100%] mx-auto text-3xl md:text-5xl font-bold  font-gilroy text-center lg:text-left  w-full align-left text-[#222057] mb-3 lg:leading-tight	">
              Verify  <span className="text-amber-500">Our Student</span> Credentials
            </h1>
            <p className="w-[90%] md:w-[100%] mx-auto font-gilroyregular text-[16px] text-center lg:text-left  font-extralight text-[#232323] my-7">
              Our internationally accredited Diploma is designed to <br className="hidden lg:block" /> help you stand out as an expert in a crowded tech space.
            </p>
            <form className="w-[90%] md:w-[100%] flex bg-[#F0F0F0] justify-between items-center mx-auto lg:mx-0 ">
              <input type="search" name="cert_id" placeholder="Enter certificate number here" className="text-[12px]  px-3 md:px8 py-2 h-[40px] w-[70%] border-none outline-none" />
              <button type="submit" className="bg-amber-500 text-[12px] text-white px-3 md:px8 py-2 rounded-r-lg flex justify-center items-center h-[40px] w-[30%]">
                Search
              </button>
            </form>
          </div>
          <div
            className="col-span-3 map order-first lg:order-last   w-full h-full justify-center items-center  px-6 md:px-2"
            data-aos="fade-left"
            data-aos-duration="3000"
            style={{
              backgroundImage: `url(https://i.im.ge/2023/05/10/U587lx.Group-20667.png)`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img src={"https://i.im.ge/2023/05/10/U587lx.Group-20667.png"} className=" mx-auto" alt="" /> */}
          </div>
        </div>
      </section>
      {
        isValidCertificate ?
        certData.first_name ?
            <CertificateData data={certData} />
            : null
          : <InvalidCert/>
      }
    </>
  );
}

export default HeroSection;
