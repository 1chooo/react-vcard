import writingImage from "../../Assets/images/icons/writing.png";
import dumbBellImage from "../../Assets/images/icons/dumbbell.png";
import developerImage from "../../Assets/images/icons/developer.png";
import cameraImage from "../../Assets/images/icons/camera.png";

export interface LifeStyle {
  icon  : string;
  title : string;
  text  : string;
}

export const lifestyles: LifeStyle[] = [
  {
    icon: developerImage,
    title: "Open Source Contributor",
    text: "Actively contributing to open source projects on GitHub."
  },
  {
    icon: writingImage,
    title: "Content Creator",
    text: "Love to share my knowledge and experience with others."
  },
  {
    icon: dumbBellImage,
    title: "Workouts",
    text: "Basketball and weight training defines my active workout lifestyle."
  },
  {
    icon: cameraImage,
    title: "Photography",
    text: "Sky brings freedom; streets, a reminder of others' contributions."
  }
];
