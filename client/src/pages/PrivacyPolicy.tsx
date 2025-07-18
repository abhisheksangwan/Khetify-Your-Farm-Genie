import NewNavbar from "@/components/NewNavbar";
import LanguageSelector from "@/components/LanguageSelector";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* <NewNavbar /> */}
            <LanguageSelector selectedLanguage="" setSelectedLanguage={() => {}} />
        <section className="pt-24 pb-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 animate-fade-in">Privacy Policy</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
                </p>
            </div>
            </div>
        </section>
        </div>
    );
}

export default PrivacyPolicy;