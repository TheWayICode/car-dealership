import Supra1 from "./assets/supra1.jpg";

function MainPage() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat w-full"
      style={{
        backgroundImage: `url(${Supra1})`,
        backgroundAttachment: "fixed",
        backgroundPositionX: "70%"
      }}>
      <div className="min-h-screen text-center pt-72 text-white bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold pb-4">Welcome to Kim's Car Dealership</h1>
        <p className="text-lg font-semibold pb-4">The premiere solution for automobile dealership management</p>
      </div>
      <div className="text-center py-20 text-gray-100 bg-gray-800 bg-opacity-90">
        <h2 className="font-bold text-2xl pb-3">Our Mission</h2>
        <p className="text-base font-semibold">"To provide our customers with the best car buying experience possible"</p>
      </div>
      <div className="text-center py-8 text-black bg-gray-200 bg-opacity-90">
        <h2 className="text-2xl font-bold pb-4">Why Choose Us?</h2>
        <div className="row lg:px-40 md:px-32 sm:px-20 px-16 ease-in-out transition-all">
          <div className="col-md-6 mb-4">
            <div className="value-prop bg-dark text-white p-4">
              <h3 className="font-bold text-lg pb-4">Wide Selection</h3>
              <p>We offer a diverse range of cars that cater to all kinds of tastes and budgets. From sleek sports cars to spacious family vehicles, we have it all. Our inventory is constantly updated to keep up with the latest trends and models, ensuring that you have access to the latest and greatest cars on the market.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="value-prop bg-dark text-white p-4">
              <h3 className="font-bold text-lg pb-4">Reliability</h3>
              <p>When you choose our dealership, you are getting the most reliable cars on the market. Our expert team thoroughly inspects each car to ensure that it meets our high standards of quality and safety. We also offer warranties and maintenance services to ensure that your car remains in top condition for years to come.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
