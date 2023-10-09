

const AppointmentForm = () => {
  return (
    <div>
      <div className="container mx-auto my-8 flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6">Schedule an Appointment</h1>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-3">
          <div className="mb-2 w-1/2">
            <img src="https://i.ibb.co/2FNJPRz/istockphoto-1366605129-612x612.jpg" alt="Wellness Center" />
          </div>
          <div className="md:w-1/2">
            <form className="max-w-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Full Name:
                </label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email:
                </label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                  Phone Number:
                </label>
                <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-full border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-600">
                  Preferred Appointment Date:
                </label>
                <input type="date" id="appointmentDate" name="appointmentDate" className="mt-1 p-2 w-full border rounded-md" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message (optional):
                </label>
                <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Submit Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>


  );
};

export default AppointmentForm;