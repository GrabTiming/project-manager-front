import MainView from "@/components/MainView.vue";
import ProjectView from "@/components/ProjectView.vue";
import IntroductionVIew from "@/components/IntroductionView.vue";
import MyVideoView from "@/components/MyVideoView.vue";
import SelectedVideo from "@/components/SelectedVideoView.vue";
import BuildProcessView from "@/components/BuildProcessView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: MainView,
    children: [
      {
        path: "info",
        name: "Info",
        component: IntroductionVIew,
      },
      {
        path: "project",
        name: "Project",
        component: ProjectView,
      },
    ],
  },
  {
    path: "/video",
    name: "video",
    component: MyVideoView,
  },
  {
    path: "/selected-video",
    name: "selectedVideo",
    component: SelectedVideo,
  },
  {
    path: "/build_process",
    name: "BuildProcess",
    component: BuildProcessView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
