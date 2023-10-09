

const JoinUs = () => {
    return (
        <div className="my-6">
            <p className=" text-center mt-4 font-semibold text-[35px] my-7"> Join Us Today and Embrace a Healthier You</p>
            <section className="bg-white py-12">
      <div className="container mx-auto md:flex items-center justify-center px-4">
        <div className="md:w-1/2 pr-8 mb-2 md:m-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name:
            </label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message:
            </label>
            <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>
        </div>
        <div className="md:w-1/2">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Why Join Our Wellness Center?</h3>
            <p className="text-gray-700">
              At Wellness Center, we are dedicated to your well-being. Our personalized approach to
              wellness, experienced staff, and supportive community make us the perfect choice for your journey
              to a healthier and happier life.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Benefits of Joining:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Personalized Wellness Plans</li>
              <li>Expert Nutrition Counseling</li>
              <li>Mindfulness Meditation Classes</li>
              <li>Community Wellness Events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default JoinUs;