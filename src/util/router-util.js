
function mergeSubInRoute(routes, subRoute) {
    console.log('subRoute');
    console.log(subRoute);
    for (var k = 0; k < subRoute.length; k++) {
        for (var i = 0; i < routes.length; i++) {
            if (routes[i].name === subRoute[k].fatherName) {
                if (routes[i].children) {
                    routes[i].children = routes[i].children.concat(subRoute[k]);
                } else {
                    routes[i].children = [subRoute[k]];
                }
                break;
            } else if (routes[i].children) {
                var flag = false;
                for (var j = 0; j < routes[i].children.length; j++) {
                    if (routes[i].children[j].name === subRoute[k].fatherName) {
                        if (routes[i].children[j].children) {
                            routes[i].children[j].children = routes[i].children[j].children.concat(subRoute[k]);
                        } else {
                            routes[i].children[j].children = [subRoute[k]];
                        }
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    break;
                }
            }
        }
    }

    return routes;
}

export default {
    mergeSubInRoute
};
