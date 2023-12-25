const ContractUs = () => {
  return (
    <div className=" bg-[#F7D8A3] min-h-screen ">
      <div className="hero mb-10  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6">
              We're thrilled to connect with you! At SCC Technovision Inc.,
              we're dedicated to providing top-notch service and support to our
              valued users. Whether you have a question, need assistance, or
              simply want to share feedback, our team is here and eager to help.
              How Can We Assist You? Technical Support: Encountering a glitch or
              have a technical query? Our support team is ready to troubleshoot
              and guide you through any issues. General Inquiries: Curious about
              our features, pricing, or need more information? We're happy to
              provide comprehensive details to ensure you're fully informed.
              Feedback and Suggestions: Your input matters! Share your thoughts,
              ideas, or suggestions to help us improve and better serve your
              needs. Contact Options Email: Drop us an email at
              support@taskmanager.com for prompt assistance. Live Chat: Need
              immediate help? Our live chat support is available during business
              hours for real-time assistance. FAQs: Check out our comprehensive
              FAQ section for quick answers to commonly asked questions. Connect
              with Us Stay updated with the latest news, tips, and feature
              releases by following us on social media: Facebook Twitter
              LinkedIn We value your time and aim to respond to all inquiries
              within 24 hours. Your satisfaction is our priority, and we look
              forward to hearing from you soon!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="email"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Comment</span>
                </label>
                <textarea className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractUs;
