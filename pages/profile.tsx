import ProfileInfo from 'components/profile/profileInfo';
import FixedTopBar from 'components/TopBar/FixedTopBar';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsFillPencilFill } from 'react-icons/bs';
import Keywords from 'components/profile/keywords';
import { sendProfileImage, getProfile } from 'utils/apis/api';
import { useCookies } from 'react-cookie';
import Contribution from '@components/profile/contribution';
import { profile } from '@public/images';

const Layout = styled.div`
  width: 100vw;
  height: 95vh;
  background-color: #333;
`;

const ProfileLayout = styled.div`
  width: 80vw;
  height: 90vh;
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
  gap: 20px;
`;

const Keyword = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding: 7px;
`;

const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    questionCount: 0,
    keywords: [],
  });
  const [profileImage, setProfileImage] = useState(null);
  const [hoverProfileImage, setHoverProfileImage] = useState(false);

  useEffect(() => {
    setProfile();
  }, []);

  const setProfile = async () => {
    let result: any = await getProfile(cookies.userInfo.userid);

    result = result.data.context;

    setUserInfo({
      ...userInfo,
      username: result.info.username,
      email: result.info.email,
      questionCount: result.info.questionCount,
      keywords: result.keywords,
    });
    const newBlob = new Blob([new Uint8Array(result.info.image)], {
      type: 'image/png',
    });
    setProfileImage(result.info.image);
  };

  const handleHover = () => {
    hoverProfileImage
      ? setHoverProfileImage(false)
      : setHoverProfileImage(true);
  };

  const handleFile = async (e: any) => {
    const formData: FormData = new FormData();
    formData.append('img', e.target.files[0]);
    formData.append('userid', cookies.userInfo.userid);
    const result = await sendProfileImage(cookies.userInfo.userid, formData);
    if (result.status === 200) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
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
            {profileImage > 0 ? (
              <UserProfileImage src={profileImage} width={300} height={300} />
            ) : null}

            {/* <UserProfileImage src={profile} width={300} height={300} /> */}

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
            <ProfileInfo
              email={userInfo.email}
              username={userInfo.username}
              questionCount={userInfo.questionCount}
            />
          </ProfileDetailLayout>
        </ProfileInfoLayout>
        <QuestionInfoLayout>
          <Keyword>
            <Title>My Keywords</Title>
            <Keywords data={userInfo.keywords} />
          </Keyword>
          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <AddInfo />
            <AddInfo />
          </div> */}
          <Keyword>
            <Contribution />
          </Keyword>
        </QuestionInfoLayout>
      </ProfileLayout>
    </Layout>
  );
};

export default Profile;
