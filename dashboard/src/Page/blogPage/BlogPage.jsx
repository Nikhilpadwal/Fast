import React, { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BlogPage() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const getAllBlog = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllBlogs`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response?.data?.status);
        if (response?.data?.status == true) {
          setBlogs(response?.data?.data);
        }
        if (response?.data?.status == false) {
          toast.error(response?.data?.message, {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message, {
          position: "bottom-right",
          autoClose: 4000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });
  };

  const deleteBlog = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const config = {
        url: process.env.REACT_APP_BASE_URL + `api/deleteBlog/${id}`,
        method: "get",
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response?.data?.status);
          if (response?.data?.status == true) {
            setBlogs(response?.data?.data);
          }
          if (response?.data?.status == false) {
            toast.error(response?.data?.message, {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message, {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        });
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  return (
    <div className="containers p-4 pt-0">
      <div className="text-end mt-4">
        <button
          className="btn btn-success "
          onClick={() => navigate("/CreateBlogPage")}
        >
          Create New Blog
        </button>
      </div>
      <h2 className="text-center">Blog Management</h2>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length > 0 ? (
            blogs.map((blog, no) => (
              <tr key={blog._id}>
                <th>{no+1}</th>
                <td>{blog.title}</td>
                <td>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    width="80"
                    height="50"
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                  />
                </td>
                <td>{blog.description.split(" ").slice(0, 10).join(" ")}...</td>
                <td className="text-center">
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => navigate(`/EditBlogPage/${blog._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mt-1 btn-sm"
                    onClick={() => deleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No blogs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default BlogPage;
