import { Tabs } from "flowbite-react";
import market4opticals1 from "../../assets/images/market4opticals1.svg";
import achan1 from "../../assets/images/achan1.svg";
import identtii1 from "../../assets/images/identtii1.svg";
import truesaver1 from "../../assets/images/truesaver1.svg";
import image from "../../assets/images/Image.svg";

function Projects() {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item title={<img src={achan1} className="h-16 w-32" />} icon={""}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="h-full flex flex-col justify-center ">
              <h1 className="text-2xl font-semibold text-amber-400 font-gilroy">
                Project Title
              </h1>
              <p className="mt-4 text-sm font-gilroyregular ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
              </p>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item
          title={<img src={truesaver1} className="h-16 w-32" />}
          icon={""}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="h-full flex flex-col justify-center ">
              <h1 className="text-2xl font-semibold text-amber-400 font-gilroy">
                Project Title
              </h1>
              <p className="mt-4 text-sm font-gilroyregular ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
              </p>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item
          title={<img src={identtii1} className="h-16 w-32" />}
          icon={""}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="h-full flex flex-col justify-center ">
              <h1 className="text-2xl font-semibold text-amber-400 font-gilroy">
                Project Title
              </h1>
              <p className="mt-4 text-sm font-gilroyregular ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
              </p>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item
          title={<img src={market4opticals1} className="h-16 w-32" />}
          icon={""}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="h-full flex flex-col justify-center ">
              <h1 className="text-2xl font-semibold text-amber-400 font-gilroy">
                Project Title
              </h1>
              <p className="mt-4 text-sm font-gilroyregular ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Pellentesque euismod, nisi vel consectetur euismod, nisi nunc.
              </p>
            </div>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}

export default Projects;
