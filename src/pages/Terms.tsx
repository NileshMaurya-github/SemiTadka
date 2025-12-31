import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Terms = () => {
    return (
        <Layout>
            <SEO title="Terms & Conditions" description="Terms and Conditions for SemiTadka" />
            <div className="container py-12 max-w-4xl">
                <h1 className="font-display text-4xl font-bold mb-8">Terms & Conditions</h1>
                <div className="prose prose-stone dark:prose-invert max-w-none space-y-6">
                    <p>Last updated: January 1, 2024</p>
                    <p>
                        Welcome to SemiTadka! These terms and conditions outline the rules and regulations for the use of SemiTadka's Website.
                    </p>

                    <h2 className="text-2xl font-bold">Content Liability</h2>
                    <p>
                        We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
                    </p>

                    <h2 className="text-2xl font-bold">License</h2>
                    <p>
                        Unless otherwise stated, SemiTadka and/or its licensors own the intellectual property rights for all material on SemiTadka.
                        All intellectual property rights are reserved. You may access this from SemiTadka for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>

                    <h2 className="text-2xl font-bold">You must not:</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Republish material from SemiTadka</li>
                        <li>Sell, rent or sub-license material from SemiTadka</li>
                        <li>Reproduce, duplicate or copy material from SemiTadka</li>
                        <li>Redistribute content from SemiTadka</li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default Terms;
