
import React from 'react';
import { Code, Slack, Dock, Sheet, Cpu } from 'lucide-react';

const courses = [
    {
        id: 1,
        name: 'Basic Algorithm',
        lessons: 25,
        startDate: '27 Jan, 2023',
        completed: 10,
        total: 25,
        duration: '14h 38m 56s',
        icon: <Dock />,
        style: "text-purple-500"
    },
    {
        id: 2,
        name: 'Web Development',
        lessons: 45,
        startDate: '23 Feb, 2023',
        completed: 40,
        total: 45,
        duration: '36h 30m 00s',
        icon: <Code />,
        style: "text-blue-500"
    },
    {
        id: 3,
        name: 'Basic Data Science',
        lessons: 37,
        startDate: '14 Jan, 2023',
        completed: 9,
        total: 37,
        duration: '37h 00m 00s',
        icon: <Sheet />,
        style: "text-orange-500"
    },
    {
        id: 4,
        name: 'UI/UX Design',
        lessons: 32,
        startDate: '19 Feb, 2023',
        completed: 26,
        total: 32,
        duration: '16h 40m 50s',
        icon: <Cpu />,
        style: "text-green-500"
    },
    {
        id: 5,
        name: 'Project Management',
        lessons: 19,
        startDate: '27 Jan, 2023',
        completed: 14,
        total: 19,
        duration: '13h 20m 00s',
        icon: <Slack />,
        style: "text-red-500"
    },
];

const CourseList = () => {
    return (
        <div className="max-w-[800px] mx-4 md:mx-auto mt-8 p-4">
            <div className="flex justify-between items-center ">
                <h2 className="text-2xl font-bold">My Courses</h2>
                <a className="text-purple-500 font-medium hover:underline" href="#">View All</a>
            </div>
            <table className="w-full mt-6 bg-white shadow-gray-200 shadow-lg border-collapse rounded-lg">
                <thead className="bg-gray-100">
                    <tr className="text-left text-gray-700">
                        <th className="p-4">Course Name</th>
                        <th className="p-4">Start Date</th>
                        <th className="p-4 text-center">Lesson Completed</th>
                        <th className="p-4">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id} className="border-b last:border-none">
                            <td className="flex items-center gap-x-4 p-4">
                                <span className={`${course.style} text-2xl`}>{course.icon}</span>
                                <div>
                                    <h3 className="font-bold text-lg">{course.name}</h3>
                                    <p className="text-sm text-gray-500">{course.lessons} Lessons</p>
                                </div>
                            </td>
                            <td className="p-4 font-medium text-gray-600">{course.startDate}</td>
                            <td className="p-4 font-medium text-center text-gray-600">
                                {course.completed}/{course.total} ({Math.round((course.completed / course.total) * 100)}%)
                            </td>
                            <td className="p-4 font-medium text-gray-600">{course.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;
