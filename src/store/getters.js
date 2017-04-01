// Bread Crumbs
export const crumbs = state => {
  let crumbs = []
  switch (state.route.name){
  case "gym":
    crumbs.push({name: 'Gym', route: {name: 'gym'}});
    break;
  case "walls":
    crumbs.push({name: 'Gym', route: {name: 'gym'}});
    crumbs.push({name: 'Walls', route: {name: 'walls'}});
    break;
  case "wall":
    crumbs.push({name: 'Gym', route: {name: 'gym'}});
    crumbs.push({name: 'Walls', route: {name: 'walls'}});
    crumbs.push({name: 'Wall', route: {name: 'wall'}});
    break;
  case "users":
    crumbs.push({name: 'Gym', route: {name: 'gym'}});
    crumbs.push({name: 'Users', route: {name: 'users'}});
    break;
  case "announcements":
    crumbs.push({name: 'Gym', route: {name: 'gym'}});
    crumbs.push({name: 'Announcements', route: {name: 'announcements'}});
    break;
  case "distribution":
    crumbs.push({name: 'Gym', route: {name: 'gym'}});
    crumbs.push({name: 'Distribution', route: {name: 'distribution'}});
    break;
  case "setters":
    crumbs.push({name: 'Gym', route: {name: 'gym'}});
    crumbs.push({name: 'Setters', route: {name: 'setters'}});
    break;
  }
  return crumbs
}

// Nav
export const nav_items = state => state.nav_items


// Gym
export const gyms = state => state.gyms


// Gym
export const gym = state => {
  // TODO Remove this
  return {
    name: "SBP"
  }
}

