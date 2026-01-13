import PageHeader from "@/components/page-header";

export default function CookiePolicyPage() {
  return (
    <div className="pt-16">
      <PageHeader 
        title="Cookie Policy"
        description="Last updated: October 26, 2024"
      />
      <div className="container mx-auto px-4 py-16 prose prose-lg max-w-4xl">
        <h2>Introduction</h2>
        <p>
            Amazon Solutions Pro ("we", "our", or "us") uses cookies on our website. By using our website, you consent to the use of cookies.
            This Cookie Policy explains what cookies are, how we use them, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies, and further information about cookies.
        </p>

        <h2>What are cookies?</h2>
        <p>
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
            Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
        </p>
        
        <h2>How We Use Cookies</h2>
        <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:</p>
        <ul>
            <li><strong>To enable essential functions:</strong> We use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
            <li><strong>For analytics and performance:</strong> We use analytics cookies to track information how the Service is used so that we can make improvements. We may also use analytics cookies to test new advertisements, pages, features or new functionality of the Service to see how our users react to them.</li>
            <li><strong>For advertising:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
            This includes services like Google Analytics and others.
        </p>
        
        <h2>Your Choices Regarding Cookies</h2>
        <p>
            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </p>
        <ul>
            <li>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer">https://support.google.com/accounts/answer/32050</a></li>
            <li>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" target="_blank" rel="noopener noreferrer">http://support.microsoft.com/kb/278835</a></li>
            <li>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></li>
            <li>For any other web browser, please visit your web browser's official web pages.</li>
        </ul>

        <h2>Contact Us</h2>
        <p>If you have any questions about our use of cookies, you can contact us at:</p>
        <p>Email: support@amazonsolutionspro.com</p>
      </div>
    </div>
  );
}
