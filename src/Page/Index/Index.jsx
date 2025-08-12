import React from "react";
import Header from "../../components/Header/Header";
import FeatureBox from "../../components/FeatureBox/FeatureBox";
import { FeatureBoxData } from "../../Data";
import TitleSection from "../../components/TitleSection/TitleSection";
import IconCompany from "../../components/IconCompany/IconCompany";
import CommentUser from "../../components/CommentHomePage/CommentUser";
import SendEmail from "../../components/SendEmail/SendEmail";
const Index = () => {
    return (
        <div>
            <Header />
            <div className="w-vw dark:bg-gray-950 bg-gray-200">
                <div className="w-full flex items-center justify-center ">
                    <div className="w-px bg-gray-600 dark:bg-white h-16 -m-8"></div>
                </div>
                <div className="py-20">
                    <TitleSection
                        title="How Simple works"
                        description="Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                        excepteur sint occaecat cupidatat."
                    />

                    <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
                        {FeatureBoxData.map((item) => (
                            <FeatureBox key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-vw">
                <div className="w-full flex items-center justify-center ">
                    <div className="w-px bg-gray-600 dark:bg-white h-16 -m-8"></div>
                </div>
                <div className="py-20">
                    <TitleSection
                        title="Trusted by over 20,000 companies all over the world"
                        description="Arcu cursus vitae congue mauris rhoncus viverra nibh
                        cras pulvinar mattis blandit libero cursus mattis."
                    />
                    <IconCompany />
                    <CommentUser />
                    <SendEmail />
                </div>
            </div>
        </div>
    );
};

export default Index;
