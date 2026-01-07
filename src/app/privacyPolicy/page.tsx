const PrivacyPolicyPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-screen h-screen overflow-y-hidden mx-auto pt-12 lg:pt-20 ">
        <iframe
          frameBorder="0"
          id="myIframe"
          src="https://www.iubenda.com/privacy-policy/94169408/full-legal"
          sandbox="allow-scripts allow-same-origin allow-forms"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;
