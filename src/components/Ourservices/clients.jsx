import served from "../../assets/images/served.svg";

function Clients() {
  return (
    <section className="h-fit py-12 md:py-28 w-screen bg-gray-50">
      <center>
        <h1
          className="text-xl font-extralight text-[#222057] font-gilroy text-center w-full align-left mb-12 "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Clients We Have Served{" "}
        </h1>
      </center>
      <div className="w-11/12 md:w-7/12 mx-auto">
        <img
          src={served}
          alt="map"
          className="w-full h-full"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
      </div>
    </section>
  );
}

export default Clients;
