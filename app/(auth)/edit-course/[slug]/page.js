import { getCourse } from '@/lib/courseService';
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import CourseEditClientWrapper from '@/components/CoursesAdmin/CourseEditClientWrapper';
import StopSpinnerOnRender from '@/components/Loading/StopSpinnerOnRender';

export default async function CourseEditPage({ params }) {
    const { slug } = await params;
  const course = await getCourse(slug);

    return (
        <StopSpinnerOnRender>
            <ProtectedRoute requireAdmin={true}>
                <CourseEditClientWrapper course={course} />;
            </ProtectedRoute>
        </StopSpinnerOnRender>
    );
}