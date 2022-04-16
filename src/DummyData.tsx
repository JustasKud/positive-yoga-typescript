import React, { ReactElement } from "react";

import PlanIcon from "./assets/PlanIcon";
import ExerciseIcon from "./assets/ExerciseIcon";
import ShoeIcon from "./assets/ShoeIcon";
import DietIcon from "./assets/DietIcon";
import WhistleIcon from "./assets/WhistleIcon";
import SmartwatchIcon from "./assets/SmartwatchIcon";
import BookCheckIcon from "./assets/BookCheckIcon";
import RatingIcon from "./assets/RatingIcon";
import Emily from "./assets/img/EmilyImage.png";
import Kylie from "./assets/img/KylieImage.png";
import Jesica from "./assets/img/JessicaImage.png";

interface PricingInterface {
  months: number;
  price: number;
  promotion: boolean;
  index: number;
}

interface ProgramContentInterface {
  image: ReactElement;
  title: string;
  description: string;
  key: number;
}

interface faqQuestionsInterface {
  title: string;
  content: string;
  id: number;
}

interface programPositivesInterface {
  content: string;
  key: number;
}

interface clientReviewsInterface {
  nameNAge: string;
  location: string;
  rating: ReactElement;
  image: string;
  content: string;
  id: number;
}

export const pricing: PricingInterface[] = [
  {
    months: 6,
    price: 9.99,
    promotion: true,
    index: 0,
  },
  {
    months: 3,
    price: 14.99,
    promotion: false,
    index: 1,
  },
  {
    months: 1,
    price: 19.99,
    promotion: false,
    index: 2,
  },
];

export const programContent: ProgramContentInterface[] = [
  {
    image: <PlanIcon />,
    title: "A personalized yoga program",
    description: "Completely safe and focused on your key goals",
    key: 0,
  },
  {
    image: <ExerciseIcon />,
    title: "Easy & enjoyable yoga workouts for your level",
    description: "Program adjusts to your level and pace",
    key: 1,
  },
  {
    image: <ShoeIcon />,
    title: "No special preparation needed",
    description:
      "Perfect for begginners! Requires no special preparation or equipment",
    key: 2,
  },
  {
    image: <DietIcon />,
    title: "Daily motivation & accountability",
    description:
      "Track your progress, develop a healthy routine, reach goals faster",
    key: 3,
  },
  {
    image: <WhistleIcon />,
    title: "Browse from various yoga challenges",
    description:
      "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
    key: 4,
  },
  {
    image: <SmartwatchIcon />,
    title: "Easy access on any device",
    description: "Do your yoga anywhere across all types of devices",
    key: 5,
  },
  {
    image: <BookCheckIcon />,
    title: "A complete guide to get started",
    description:
      "Best tips, guidelines, advice, and recommendations for successful practice",
    key: 6,
  },
];

export const programPositives: programPositivesInterface[] = [
  {
    content: "Each program adapts to your age or fitness level",
    key: 1,
  },
  {
    content: "Mindful way to exercise and get real results",
    key: 2,
  },
  {
    content: "Effective and long-term lasting results",
    key: 3,
  },
  {
    content: "Suited activities that benefit both the mind and body",
    key: 4,
  },
  {
    content: "Low-intensity but highly-effective workouts",
    key: 5,
  },
  {
    content: "Extra attention to muscle, joint and back health",
    key: 6,
  },
];

export const faqQuestions: faqQuestionsInterface[] = [
  {
    title: "What happens after I order?",
    content:
      "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.",
    id: 0,
  },
  {
    title: "Where I can access my plan?",
    content:
      "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase.",
    id: 1,
  },
  {
    title: "How can I cancel my subscription?",
    content:
      "You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app",
    id: 2,
  },
  {
    title: "Why this program is paid?",
    content:
      "We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback!",
    id: 3,
  },
];

export const clientReviews: clientReviewsInterface[] = [
  {
    nameNAge: "Emily, 28",
    location: "Delaware, NJ",
    rating: <RatingIcon />,
    image: Emily,
    content:
      "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
    id: 0,
  },
  {
    nameNAge: "Kylie, 40",
    location: "Los Angeles",
    rating: <RatingIcon />,
    image: Kylie,
    content:
      "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
    id: 1,
  },
  {
    nameNAge: "Jesica, 51",
    location: "San Francisco, CA",
    rating: <RatingIcon />,
    image: Jesica,
    content:
      "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.",
    id: 2,
  },
];
