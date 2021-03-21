export interface RouteMapItem {
  link: string;
  name: string;
  component: JSX.Element;
}

export interface ProjectInfo {
  name: string;
  description: string;
  repo: string;
  website?: string;
}

export interface WorkEx {
  org: string;
  position: string;
  description?: string;
  homepage?: string;
  startDate: string;
  endDate?: string;
}

export interface InfoStrings {
  brand: string;
  homepage: {
    hero: {
      prelude: string;
      name: string;
      subtitle: string;
    };
  };
  contact: {
    linkedin: string;
    github: string;
  };
  projects: ProjectInfo[];
  experience: WorkEx[];
}
