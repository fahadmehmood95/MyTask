import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import SimpleFade from "../Components/Fade";

export default function FetchData() {

  //Fetching Data from Given Api //
  const { isLoading, data } = useQuery("CATS-DATA", () => {
    return axios.get("https://api.thecatapi.com/v1/categories", {
      headers: {
        "x-api-key": "3cdd7227-6a13-452e-840a-f8418f96a22d",
        "Content-Type": "multipart/form-data",
      },
    });
  });

  //Passing Data to other Component as a prop//
  return <SimpleFade data={data} isLoading={isLoading}></SimpleFade>;
}
