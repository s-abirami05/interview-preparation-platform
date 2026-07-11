import DashboardLayout from "../layouts/DashboardLayout";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Profile() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your profile information.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Statistics */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-white rounded-xl shadow-md p-6">
    <h3 className="text-gray-500">Questions Solved</h3>
    <p className="text-3xl font-bold text-blue-600 mt-2">
      120
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-md p-6">
    <h3 className="text-gray-500">Bookmarks</h3>
    <p className="text-3xl font-bold text-green-600 mt-2">
      35
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-md p-6">
    <h3 className="text-gray-500">Mock Tests</h3>
    <p className="text-3xl font-bold text-orange-500 mt-2">
      10
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-md p-6">
    <h3 className="text-gray-500">Achievements</h3>
    <p className="text-3xl font-bold text-purple-600 mt-2">
      8
    </p>
  </div>

</div>

            {/* Avatar */}
            <div className="text-blue-600">
              <FaUserCircle size={120} />
            </div>

            {/* User Details */}
            <div className="flex-1 space-y-4">

              <h2 className="text-2xl font-bold">
                John Doe
              </h2>

              <div className="space-y-3 text-gray-600">

                <div className="flex items-center gap-3">
                  <FaEnvelope />
                  <span>john@example.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone />
                  <span>+91 9876543210</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt />
                  <span>Chennai, India</span>
                </div>

              </div>

              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
              >
                Edit Profile
              </button>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Profile;