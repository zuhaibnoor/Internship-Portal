import React from 'react';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 bg-gray-700 text-left">Name</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Email Address</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Phone No</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Department</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Domain</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Semester</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">University</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Projects Made</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Internship Period</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Resume Upload</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Projects Ongoing</th>
                            <th className="py-3 px-4 bg-gray-700 text-left">Review of Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example row */}
                        <tr className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4">John Doe</td>
                            <td className="py-3 px-4">john.doe@example.com</td>
                            <td className="py-3 px-4">123-456-7890</td>
                            <td className="py-3 px-4">Computer Science</td>
                            <td className="py-3 px-4">Web Development</td>
                            <td className="py-3 px-4">6th</td>
                            <td className="py-3 px-4">XYZ University</td>
                            <td className="py-3 px-4">5</td>
                            <td className="py-3 px-4">June 2021 - August 2021</td>
                            <td className="py-3 px-4"><a href="#" className="text-blue-500 hover:underline">Download</a></td>
                            <td className="py-3 px-4">2</td>
                            <td className="py-3 px-4"><a href="#" className="text-blue-500 hover:underline">Review</a></td>
                        </tr>

                        <tr className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4">John Doe</td>
                            <td className="py-3 px-4">john.doe@example.com</td>
                            <td className="py-3 px-4">123-456-7890</td>
                            <td className="py-3 px-4">Computer Science</td>
                            <td className="py-3 px-4">Web Development</td>
                            <td className="py-3 px-4">6th</td>
                            <td className="py-3 px-4">XYZ University</td>
                            <td className="py-3 px-4">5</td>
                            <td className="py-3 px-4">June 2021 - August 2021</td>
                            <td className="py-3 px-4"><a href="#" className="text-blue-500 hover:underline">Download</a></td>
                            <td className="py-3 px-4">2</td>
                            <td className="py-3 px-4"><a href="#" className="text-blue-500 hover:underline">Review</a></td>
                        </tr>

                        <tr className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4">John Doe</td>
                            <td className="py-3 px-4">john.doe@example.com</td>
                            <td className="py-3 px-4">123-456-7890</td>
                            <td className="py-3 px-4">Computer Science</td>
                            <td className="py-3 px-4">Web Development</td>
                            <td className="py-3 px-4">6th</td>
                            <td className="py-3 px-4">XYZ University</td>
                            <td className="py-3 px-4">5</td>
                            <td className="py-3 px-4">June 2021 - August 2021</td>
                            <td className="py-3 px-4"><a href="#" className="text-blue-500 hover:underline">Download</a></td>
                            <td className="py-3 px-4">2</td>
                            <td className="py-3 px-4"><a href="#" className="text-blue-500 hover:underline">Review</a></td>
                        </tr>

                        <tr className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4">John Doe</td>
                            <td className="py-3 px-4">john.doe@example.com</td>
                            <td className="py-3 px-4">123-456-7890</td>
                            <td className="py-3 px-4">Computer Science</td>
                            <td className="py-3 px-4">Web Development</td>
                            <td className="py-3 px-4">6th</td>
                            <td className="py-3 px-4">XYZ University</td>
                            <td className="py-3 px-4">5</td>
                            <td className="py-3 px-4">June 2021 - August 2021</td>
                            <td className="py-3 px-4"><a href="#" className="text-blue-500 hover:underline">Download</a></td>
                            <td className="py-3 px-4">2</td>
                            <td className="py-3 px-4"><a href="#" className="text-blue-500 hover:underline">Review</a></td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}