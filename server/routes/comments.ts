export const commentsRoute = {
  path: "/comments",
  method: "GET",
};

export function handleComments() {
  return {
    ok: true,
    route: "comments",
    message: "Starter route for Commenting on Tasks",
  };
}
