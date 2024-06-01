import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const init = async () => {
    const response = await axios.get("http://localhost:3000/admin/courses", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setCourses(response.data.courses);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f6f8" }}>
      <center>
        <div style={{ marginBottom: "20px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#4e0eff", color: "whitesmoke" }}
            onClick={() => navigate("/admin/statistic")}
          >
            Show Statistic
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "10px", backgroundColor: "#4e0eff", color: "whitesmoke" }}
            onClick={() => navigate("/admin/addcourses")}
          >
            Add Course
          </Button>
        </div>
      </center>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "#131324",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {courses && courses.map((course) => <Course key={course._id} course={course} />)}
      </div>
    </div>
  );
}

export function Course({ course }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={course.image || "path/to/default/image.jpg"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ color: "#333" }}>
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: "10px" }}>
          {course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          style={{ color: "#4e0eff" }}
          onClick={() => navigate("/course/" + course._id)}
        >
          Edit
        </Button>
        <Button size="small" style={{ color: "#4e0eff" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default AdminCourses;







































// SECOND CODE

// /* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-key */
// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable no-unused-vars */

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// // import MyChartComponent from "./Statics";
// // import AddCourses from "../Admin/AddCourses";

// // THIS WILL GET ALL THE COURSES




// function AdminCourses() {
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   const init = async () => {
//     function callback1(res) {
//       res.json().then(callback2);
//     }

//     const response = await axios.get("http://localhost:3000/admin/courses", {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     });
//     setCourses(response.data.courses);
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <div>
//       <center>
//         <span
//           style={{
//             alignItems: "center",
//             justifyContent: "center",
//             background: "#4e0eff",
//             padding: "0.5rem",
//           }}
//         >
//           <Button
//             onClick={() => navigate("/admin/statistic")}
//             style={{ color: "whitesmoke" }}
//           >
//             Show Statistic
//           </Button>
//         </span>
//         <div>
//           <Button
//             variant="contained"
//             style={{ padding: "0.5rem", background: "#4e0eff" }}
//             onClick={() => {
//               navigate("/admin/addcourses");
//             }}
//           >
//             AddCourse
//           </Button>
//         </div>
//       </center>
//       <div
//         style={{
//           key: "courses",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           backgroundColor: "#131324",
//         }}
//         key={"wd"}
//       >
//         {courses && courses.map((course) => <Course course={course} />)}
//       </div>
//     </div>
//   );
// }

// export function Course({ course }) {
//   const navigate = useNavigate();
//   console.log(course)

//   return (
//     <Card
//       sx={{
//         maxWidth: 345,
//         marginTop: "100px",
//         backgroundColor: "yellow",
//         marginLeft: "10px",
//       }}
//     >
//       <CardMedia
//         sx={{ height: 140, backgroundColor: "white" }}
//         image={course.imageLink}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {course.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           <br />
//           {course.description}
//           <br />
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           size="small"
//           onClick={() => {
//             navigate("/course/" + course._id);
//           }}
//         >
//           Edit
//         </Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>


//   );
// }

// export default AdminCourses;








































// THIRD CODE 








// /* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-key */
// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable no-unused-vars */

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "@/config";

// // THIS WILL GET ALL THE COURSES

// function AdminCourses() {
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   const init = async () => {
//     const response = await axios.get(`${BASE_URL}/admin/courses`, {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     });
//     setCourses(response.data.courses);
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <div>
//       <center>
//         <span
//           style={{
//             alignItems: "center",
//             justifyContent: "center",
//             background: "#4e0eff",
//             padding: "0.5rem",
//           }}
//         >
//           <Button
//             onClick={() => navigate("/admin/statistic")}
//             style={{ color: "whitesmoke" }}
//           >
//             Show Statistic
//           </Button>
//         </span>
//         <div style={{ marginTop: 80 }}>
//           <Typography variant="h3" color="initial">
//             Admin Courses
//           </Typography>
//         </div>
//       </center>
//       <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {courses.map((course) => (
//           <CourseCard key={course._id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // INDIVIDUAL COURSE CARD

// function CourseCard({ course }) {
//   const navigate = useNavigate();

//   return (
//     <Card sx={{ maxWidth: 345, margin: "20px", backgroundColor: "yellow" }}>
//       <CardMedia sx={{ height: 140, backgroundColor: "red" }} image={course.image} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {course.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           <br />
//           {course.description}
//           <br />
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" onClick={() => navigate(`/admin/courses/${course._id}`)}>Edit</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default AdminCourses;
