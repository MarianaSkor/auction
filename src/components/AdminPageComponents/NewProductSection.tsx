import { Button, Grid, styled } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useDispatch } from "react-redux";
import { addProduct } from "src/redux/apiCalls";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { app } from "src/firebase";

const PREFIX = "NewProductSection";

const StyledWrapper = styled(Grid, {
  name: `${PREFIX}-StyledWrapper`,
})(({ theme }) => ({
  ".addProductForm": {
    marginTop: theme.spacing(1.5),
  },

  ".addProductItem": {
    width: 250,
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(1.5),
  },

  ".addProductItem > label": {
    color: theme.palette.secondary.main,
    fontFamily: "CormorantInfantSemiBold",
    marginBottom: theme.spacing(1.5),
  },

  ".addProductItem > input": {
    padding: theme.spacing(1.5),
  },

  ".addProductItem > select": {
    padding: theme.spacing(1.5),
  },
}));

export const NewProductSection = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL };
          addProduct(product, dispatch);
        });
      }
    );
    navigate(ROUTES.PRODUCTS);
  };

  return (
    <StyledWrapper>
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Круасaн зі шоколадом"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="85"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            name="categories"
            type="text"
            placeholder="croissants"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <Button variant="contained" color="info" onClick={handleClick}>
          Create
        </Button>
      </form>
    </StyledWrapper>
  );
};
