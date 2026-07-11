import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to Interview Preparation Platform
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Prepare for coding interviews, aptitude tests, mock interviews, and track your progress in one place.
        </p>
      </section>
    </MainLayout>
  );
}

export default Home;