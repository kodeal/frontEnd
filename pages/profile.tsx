import ProfileInfo from 'components/profile/profileInfo';
import FixedTopBar from 'components/TopBar/FixedTopBar';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsFillPencilFill } from 'react-icons/bs';
// import Keywords from 'components/profile/keywords';
import { sendProfileImage, getProfile } from 'utils/apis/api';
import { useCookies } from 'react-cookie';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333;
`;

const ProfileLayout = styled.div`
  width: 80vw;
  height: 90vh;
  border: 1px solid red;
  margin: 5vh auto 0px auto;
  display: flex;
  padding: 20px;
`;

const ProfileInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ProfileImageLayout = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: rgb(197, 197, 197);
  border: 4px solid rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const UserProfileImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const HoverInput = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;

const InputLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileDetailLayout = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
`;

const QuestionInfoLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 80px;
  justify-content: space-around;
`;

const Keyword = styled.div`
  width: 100%;
  height: 30vh;
  border-radius: 10px;
  background-color: white;
`;

const AddInfo = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  background-color: white;
`;

const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);

  const [profileImage, setProfileImage] = useState('');
  const [hoverProfileImage, setHoverProfileImage] = useState(false);

  useEffect(() => {
    console.log(cookies.userInfo);
    const result = getProfile(cookies.userInfo.userid);
  }, []);

  const handleHover = () => {
    hoverProfileImage
      ? setHoverProfileImage(false)
      : setHoverProfileImage(true);
  };
  const handleFile = (e: any) => {
    console.log(e.target.files);
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    const formData: FormData = new FormData();
    formData.append('files', e.target.files[0]);
    console.log(formData.get('files'));
    const result = sendProfileImage(
      formData,
      cookies.userInfo.userid,
      cookies.userInfo.userid,
    );
  };

  return (
    <Layout>
      <FixedTopBar />
      <ProfileLayout>
        <ProfileInfoLayout>
          <ProfileImageLayout
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            {profileImage.length > 0 ? (
              <UserProfileImage src={profileImage} width={300} height={300} />
            ) : null}
            {hoverProfileImage ? (
              <HoverInput>
                <ProfileImageInput
                  type="file"
                  id="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFile}
                />
                <InputLabel htmlFor="file">
                  <BsFillPencilFill size={40} color="gray" />
                </InputLabel>
              </HoverInput>
            ) : null}
          </ProfileImageLayout>
          <ProfileDetailLayout>
            <ProfileInfo />
          </ProfileDetailLayout>
        </ProfileInfoLayout>
        <QuestionInfoLayout>
          <Keyword>{/* <Keywords /> */}</Keyword>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <AddInfo />
            <AddInfo />
          </div>
        </QuestionInfoLayout>
      </ProfileLayout>
    </Layout>
  );
};

export default Profile;
