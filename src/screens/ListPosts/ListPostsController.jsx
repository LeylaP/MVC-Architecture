import React, {useEffect, useState} from 'react';
import ListPostsView from './ListPostsView';
import {Text} from 'react-native';
import axios from 'axios';

// APİ istekleri Controllerde gerçekleştiriyoruz

const ListPostsController = () => {
  // APİ den gelen verileri saklamak için  useState kullandık
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then(res => setPostData(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {/* <Text>bu bizim ekrana yazılacak olan componentimizdir</Text> */}
      <ListPostsView postData={postData} />
    </>
  );
};

export default ListPostsController;
