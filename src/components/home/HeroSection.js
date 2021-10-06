

//component
import Input from "../materials/Input";
import FlagSelect from "../materials/FlagSelect";
import Button from "../materials/Button";
import HeroSlider from "./materials/HeroSlider";

//image
import banner1 from '../../assets/images/banner/banner-slider-1.jpeg'
import banner2 from '../../assets/images/banner/banner-slider-2.jpeg'

//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {



    return (
        <div className="relative h-[500px] before:w-full before:h-full before:bg-gradient-to-r before:from-primary-color before:z-10 before:to-transparent before:absolute before:inset-0">
            <HeroSlider />

            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div>
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="banner-logo"/>
                    <h3 className="mt-8 text-white text-4xl">Dakikalar içinde <br/> kapınızda</h3>
                </div>

                <div className="w-[400px] rounded-lg p-6 bg-gray-50 text-center">
                    <h4 className="mb-4 text-primary-color font-semibold">Giriş yap veya kayıt ol</h4>
                    <div className="flex gap-x-2">
                        <FlagSelect />
                        <Input text="Telefon Numarası" />
                    </div>
                    <div>
                        <Button
                            styles="mt-2 bg-brand-yellow tex-yellow-brand hover:text-brand-yellow hover:bg-secondary-color"
                            text="Telefon numarası ile devam et"
                        />
                        <hr className="h-[1px] mt-3 bg-gray-300" />
                        <Button
                            styles="mt-2 bg-gray-200 text-[#3D5A98] hover:text-white hover:bg-[#3D5A98]"
                            text="Facebook ile devam et"
                            icon="facebook"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
