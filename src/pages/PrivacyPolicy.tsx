import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
    return (
        <Layout>
            <SEO title="Privacy Policy" description="Privacy Policy for SemiTadka" />
            <div className="container py-12 max-w-4xl">
                <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-stone dark:prose-invert max-w-none space-y-6">
                    <p>Last updated: January 1, 2024</p>
                    <p>
                        At SemiTadka, accessible from https://semitadka.vercel.app/, one of our main priorities is the privacy of our visitors.
                        This Privacy Policy document contains types of information that is collected and recorded by SemiTadka and how we use it.
                    </p>

                    <h2 className="text-2xl font-bold">Log Files</h2>
                    <p>
                        SemiTadka follows a standard procedure of using log files. These files log visitors when they visit websites.
                        All hosting companies do this and a part of hosting services' analytics. The information collected by log files include
                        internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages,
                        and possibly the number of clicks.
                    </p>

                    <h2 className="text-2xl font-bold">Cookies and Web Beacons</h2>
                    <p>
                        Like any other website, SemiTadka uses 'cookies'. These cookies are used to store information including visitors' preferences,
                        and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience
                        by customizing our web page content based on visitors' browser type and/or other information.
                    </p>

                    <h2 className="text-2xl font-bold">Contact Us</h2>
                    <p>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;
