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
        <Tabs.Item title="unilag" icon={""}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="h-full flex flex-col justify-center ">
              <h1 className="text-2xl font-semibold text-amber-400 font-gilroy">
                Unilag
              </h1>
              <p className="mt-4 text-sm font-gilroyregular ">
                The SandBox project is an initiative of PluralCode as an
                academic institution to collaborate with Tertiary institutions
                or academic oriented firms to sensitize them into transitioning
                into tech for a profitable future. We have collaborated with
                Unilag, Slum2School, and gave Scholarships to a number of
                beneficiaries. University of Lagos as our first installment of
                the Sandbox initiative where we hosted boot camps on the campus,
                students learnt, networked and indicated interest in a tech
                skill.
              </p>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Slum2School" icon={""}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="h-full flex flex-col justify-center ">
              <h1 className="text-2xl font-semibold text-amber-400 font-gilroy">
                Slum2School
              </h1>
              <p className="mt-4 text-sm font-gilroyregular ">
                We have helped the team at Slum2school to attain a level of
                success at their switch into the tech world, helping their
                members of staff know what tech skills would be beneficial to
                their line of work and career. Also helping to propagate the
                mission of slum2school which is to take education to the slums,
                we've done this with the help of tech.
              </p>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Scholarships" icon={""}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="h-full flex flex-col justify-center ">
              <h1 className="text-2xl font-semibold text-amber-400 font-gilroy">
                Scholarships
              </h1>
              <p className="mt-4 text-sm font-gilroyregular ">
                Our model being helping 1000 Nigerians launch a sustainable
                career in tech, we have created scholarship programs that
                allowed six beneficiaries so far learn a tech course 100% Free.
                Our scholarship programs is a quarterly event that allows for
                more people to launch their career in the tech space thereby
                making them better for themselves and the society at large.
              </p>
            </div>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}

export default Projects;
