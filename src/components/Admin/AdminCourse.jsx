/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { BASE_URL } from "../../config";
import { courseState } from "../../store/atoms/course";
import AdminCourses from "./AdminCourses";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isCourseLoading
} from "../../store/selectors/course";
import Loading from "../Loading";
import { Grid } from "@mui/material";
import axios from "axios";
import { courseTitle, courseDetails, courseImage, coursePrice } from "../../store/selectors/course";



// THIS WILL GET INDIVIDUAL COURSE

function Course() {
  console.log("from course");

  let { courseId } = useParams();
  const setCourse = useSetRecoilState(courseState);
  const courseLoading = useRecoilValue(isCourseLoading);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/admin/course/${courseId}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourse({ isLoading: false, course: res.data.course });
        console.log("course");
      })
      .catch((e) => {
        setCourse({ isLoading: false, course: null });
      });
  }, []);

  if (courseLoading) {
    return;
    <Loading />;
  }

  return (
    <div>
      <GrayTopper />
      <Grid container>
        <Grid item lg={8} md={12} sm={12}>
          <UpdateCourse />
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <GetCourse />
        </Grid>
      </Grid>
    </div>
  );
}

function GrayTopper() {
  const title = useRecoilValue(courseTitle);
  return (
    <div
      style={{
        height: 250,
        background: "#212121",
        top: 0,
        width: "100vw",
        zIndex: 0,
        marginBottom: -250,
      }}
    >
      <div
        style={{
          height: 250,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography
            style={{ color: "white", fontWeight: 600 }}
            variant="h3"
            textAlign={"center"}
          >
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

// THIS WILL UPDATE INDIVIDUAL COURSE

function UpdateCourse() {
  console.log("from Update course");
  const [courseDetails, setCourse] = useRecoilState(courseState);

  const [title, setTitle] = useState(courseDetails.course.title);
  const [description, setDescription] = useState(
    courseDetails.course.description
  );
  const [image, setImage] = useState(courseDetails.course.image);

  return (
    <div
      style={{
        marginTop: 200,
      }}
    >
      <center>
        <Card
          variant="outlined"
          style={{
            width: 400,
            padding: "3rem",
          }}
        >
          <Typography>Update course details</Typography>
          <TextField
            variant="outlined"
            id="title"
            label="title"
            fullWidth={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            id="description"
            label="description"
            fullWidth={true}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            id="imglink"
            label="image link"
            fullWidth={true}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br /> <br />

          <Button
            variant="contained"
            onClick={async () => {
              axios.put(`${BASE_URL}/admin/courses/` + courseDetails.course._id, {
                title: title,
                description: description,
                imageLink: image,
                published: true,
                // price
              }, {
                headers: {
                  "Content-type": "application/json",
                  "Authorization": "Bearer " + localStorage.getItem("token")
                }
              });
              let updatedCourse = {
                _id: courseDetails.course._id,
                title: title,
                description: description,
                imageLink: image,
                // price
              };
              setCourse({ course: updatedCourse, isLoading: false });
            }}
          > Update course</Button>
        </Card>
      </center>
    </div>
  );
}

// THIS WILL RENDER ALL THE INDIVIDUAL COURSE

function GetCourse(props) {
  console.log("from get course");

  const title = useRecoilValue(courseTitle);
  const image = useRecoilValue(courseImage);

  //   return (
  //     <div>
  //       <Card
  //         sx={{
  //           maxWidth: 345,
  //           marginTop: "20px",
  //           backgroundColor: "yellow",
  //           marginLeft: "10px",
  //         }}
  //       >
  //         <CardMedia
  //           sx={{ height: 140, backgroundColor: "red" }}
  //           image={course.imagelink}
  //         />
  //         <CardContent>
  //           <Typography gutterBottom variant="h5" component="div">
  //             {course.title}
  //           </Typography>
  //           <Typography variant="body2" color="text.secondary">
  //             <br />
  //             {course.description}
  //             <br />
  //           </Typography>
  //         </CardContent>
  //         <CardActions>
  //           <Button
  //             size="small"
  //             onClick={() => {
  //               navigate("/course/" + props.course.id);
  //             }}
  //           >
  //             Edit
  //           </Button>
  //           <Button size="small">Learn More</Button>
  //         </CardActions>
  //       </Card>
  //     </div>
  //   );
  // }
  return <div style={{ display: "flex", marginTop: 50, justifyContent: "center", width: "100%" }}>
    <Card style={{
      margin: 10,
      width: 350,
      minHeight: 200,
      borderRadius: 20,
      marginRight: 50,
      paddingBottom: 15,
      zIndex: 2
    }}>
      <img src={image} style={{ width: 350 }} ></img>
      <div style={{ marginLeft: 10 }}>
        <Typography variant="h5">{title}</Typography>
        {/* <Price /> */}
      </div>
    </Card>
  </div>
}

export default Course;












































// /* eslint-disable no-unreachable */
// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/no-unknown-property */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   TextField,
//   Grid,
// } from "@mui/material";
// import { BASE_URL } from "../../config";
// import { courseState } from "../../store/atoms/course";
// import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import {
//   isCourseLoading,
//   courseTitleState,
//   courseImage,
// } from "../../store/selectors/course";
// import Loading from "../Loading";
// import axios from "axios";
// // THIS WILL GET INDIVIDUAL COURSE

// function Course() {
//   console.log("from course");

//   let { courseId } = useParams();
//   const setCourse = useSetRecoilState(courseState);
//   const courseLoading = useRecoilValue(isCourseLoading);

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}/admin/courses/${courseId}`, {
//         method: "GET",
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         setCourse({ isLoading: false, course: res.data.course });
//         console.log("course", res.data.course);
//       })
//       .catch((e) => {
//         setCourse({ isLoading: false, course: null });
//       });
//   }, [courseId]);

//   if (courseLoading) {
//     return <Loading />;
//   }

//   return (
//     <div>
//       <GrayTopper />
//       <Grid container>
//         <Grid item lg={8} md={12} sm={12}>
//           <UpdateCourse />
//         </Grid>
//         <Grid item lg={4} md={12} sm={12}>
//           <GetCourse />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// function GrayTopper() {
//   const title = useRecoilValue(courseTitleState);
//   return (
//     <div
//       style={{
//         height: 250,
//         background: "#212121",
//         top: 0,
//         width: "100vw",
//         zIndex: 0,
//         marginBottom: -250,
//       }}
//     >
//       <div
//         style={{
//           height: 250,
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//         }}
//       >
//         <div>
//           <Typography
//             style={{ color: "white", fontWeight: 600 }}
//             variant="h3"
//             textAlign={"center"}
//           >
//             {title}
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// }

// // THIS WILL UPDATE INDIVIDUAL COURSE

// function UpdateCourse() {
//   console.log("from Update course");
//   const [courseDetails, setCourse] = useRecoilState(courseState);

//   const [title, setTitle] = useState(courseDetails.course?.title || "");
//   const [description, setDescription] = useState(
//     courseDetails.course?.description || ""
//   );
//   const [image, setImage] = useState(courseDetails.course?.image || "");

//   const handleUpdateCourse = async () => {
//     try {
//       const response = await axios.put(
//         `${BASE_URL}/admin/courses/${courseDetails.course._id}`,
//         {
//           title,
//           description,
//           image,
//           published: true,
//         },
//         {
//           headers: {
//             "Content-type": "application/json",
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );

//       if (response.status === 200) {
//         setCourse({ course: response.data.course, isLoading: false });
//       }
//     } catch (error) {
//       console.error("Error updating course", error);
//     }
//   };

//   return (
//     <div
//       style={{
//         marginTop: 200,
//       }}
//     >
//       <center>
//         <Card
//           variant="outlined"
//           style={{
//             width: 400,
//             padding: "3rem",
//           }}
//         >
//           <Typography>Update course details</Typography>
//           <TextField
//             variant="outlined"
//             id="title"
//             label="Title"
//             fullWidth={true}
//             value={title}
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <TextField
//             variant="outlined"
//             id="description"
//             label="Description"
//             fullWidth={true}
//             value={description}
//             onChange={(e) => {
//               setDescription(e.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <TextField
//             variant="outlined"
//             id="imglink"
//             label="Image Link"
//             fullWidth={true}
//             value={image}
//             onChange={(e) => {
//               setImage(e.target.value);
//             }}
//           />
//           <br /> <br />
//           <Button
//             variant="contained"
//             onClick={handleUpdateCourse}
//           >
//             Update course
//           </Button>
//         </Card>
//       </center>
//     </div>
//   );
// }

// // THIS WILL RENDER ALL THE INDIVIDUAL COURSE

// function GetCourse() {
//   console.log("from get course");

//   const courseDetails = useRecoilValue(courseState);

//   if (!courseDetails.course) return null;

//   return (
//     <Card
//       sx={{
//         maxWidth: 345,
//         marginTop: "20px",
//         backgroundColor: "yellow",
//         marginLeft: "10px",
//       }}
//     >
//       <CardMedia
//         sx={{ height: 140, backgroundColor: "red" }}
//         image={courseDetails.course.image}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {courseDetails.course.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           <br />
//           {courseDetails.course.description}
//           <br />
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           size="small"
//           onClick={() => {
//             navigate("/courses/" + courseDetails.course._id);
//           }}
//         >
//           Edit
//         </Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default Course;
