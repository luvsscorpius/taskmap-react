## [1.16.1](https://github.com/luvsscorpius/taskmap-react/compare/v1.16.0...v1.16.1) (2024-07-12)


### Bug Fixes

* **frontend addtask or updatetask:** changing the params on the url to use either states ([4381354](https://github.com/luvsscorpius/taskmap-react/commit/438135407c54ccea9c98ecb8acc63c258ef0744c))
* **frontend context:** fixing function addTask, the url will use user[0]._id or user._id ([3289f9f](https://github.com/luvsscorpius/taskmap-react/commit/3289f9fe973feb5e75a0d3afa6d273b98312d59b))
* **frontend deletetask:** passing either user._id or user[0]._id in case page is reloaded ([ddff737](https://github.com/luvsscorpius/taskmap-react/commit/ddff7378f417ad1f004f70c9b4c0db937e37bb85))
* **frontend taskview:** using user.name or user[0].name in case either causes bug ([ee8ff18](https://github.com/luvsscorpius/taskmap-react/commit/ee8ff18bd88c0b03cd1d34651ac993517d330f5e))

# [1.16.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.15.0...v1.16.0) (2024-07-09)


### Bug Fixes

* **backend:** fixing tasks route to return the name of the client ([4e7bd59](https://github.com/luvsscorpius/taskmap-react/commit/4e7bd59272d21708ad370f92c62fec2abec42fb2))
* **frontend taskview:** fixing problem that wouldnt update task when page was reloaded ([8526473](https://github.com/luvsscorpius/taskmap-react/commit/85264737b0011a46d6bb3097a67009fecf8e6b44))
* **frontend useeffect:** fixing logic on useEffect to get the tasks everytime page is reload ([860459b](https://github.com/luvsscorpius/taskmap-react/commit/860459be49c3eac6fca9ce9ccf2eb8d6869d00e5))
* **frontend:** when deleting on DB it wouldnt delete on sessionStorage ([46b2699](https://github.com/luvsscorpius/taskmap-react/commit/46b269971fc567e27c5161d4c265dd22d0d79837))


### Features

* **frontend useeffect:** using useEffect again to save userInfo in case page is reloaded ([4fba1fa](https://github.com/luvsscorpius/taskmap-react/commit/4fba1fa9b7b3af06b7cceb1f9719231685319de2))
* **frontend:** finish styling paginate ([35a85c2](https://github.com/luvsscorpius/taskmap-react/commit/35a85c2ae82240494e5b3a87ca585937bfc39189))
* **frontend:** react-paginate pageclassName ([e4d898a](https://github.com/luvsscorpius/taskmap-react/commit/e4d898a3fd9e2aefea795e0dfa472268c0e31f5f))

# [1.15.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.14.0...v1.15.0) (2024-07-03)


### Features

* **frontend:** react paginate ([6110094](https://github.com/luvsscorpius/taskmap-react/commit/6110094417ae13e0feae3dde5dce7654b0647030))

# [1.14.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.13.0...v1.14.0) (2024-06-30)


### Features

* **frontend:** using filter() to delete task on frontend ([07557fc](https://github.com/luvsscorpius/taskmap-react/commit/07557fc146c06a49b750c08f8fbdea00233575d2))

# [1.13.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.12.0...v1.13.0) (2024-06-27)


### Features

* **backend:** creating a new route to delete task ([3a11cb9](https://github.com/luvsscorpius/taskmap-react/commit/3a11cb9ef3b9548f1257735c3f6bf8cdc1b97982))
* **backend:** finding the user & task, then using updateOne & $pull to delete ([311a3c8](https://github.com/luvsscorpius/taskmap-react/commit/311a3c8217a2307748092c2bac60fd7c80bb8be4))
* **frontend:** continuing the deleteTask function ([9c30f4e](https://github.com/luvsscorpius/taskmap-react/commit/9c30f4e56082c9440b2367857aeab5bdfdc86930))
* **frontend:** creating a new function to delete a task ([97e40f7](https://github.com/luvsscorpius/taskmap-react/commit/97e40f73c3531627e904102877f992148056746a))
* **frontend:** using toast to warn the client if the task was deleted ([ca69684](https://github.com/luvsscorpius/taskmap-react/commit/ca696848d848c32b6e657a9f3698aa2f59e8758e))

# [1.12.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.11.0...v1.12.0) (2024-06-24)


### Features

* **frontend:** frontend/backend - now when you create a task, a pop up (toast)  will apear ([544dfbb](https://github.com/luvsscorpius/taskmap-react/commit/544dfbb7553f136cb88bf7dd08bdb5f95850ea03))

# [1.11.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.10.0...v1.11.0) (2024-06-23)


### Features

* **frontend:** now when you check a task an animation will happen ([ad13602](https://github.com/luvsscorpius/taskmap-react/commit/ad13602a4d51c728fd8939625eca1c8dc414e57c))

# [1.10.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.9.0...v1.10.0) (2024-06-22)


### Features

* **frontend:** now you can hide or show your password ([c15c184](https://github.com/luvsscorpius/taskmap-react/commit/c15c18461d6cba5a13adb3fe4fbad446c525c6ae))
* **frontend:** togglebutton logic ([cbf66c0](https://github.com/luvsscorpius/taskmap-react/commit/cbf66c0b6563e3207f97ec935061ec8133c437a9))

# [1.9.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.8.0...v1.9.0) (2024-06-21)


### Features

* **theme:** adding theme changes to application ([e80b47e](https://github.com/luvsscorpius/taskmap-react/commit/e80b47e39897b6f6633dacdd1c4928cd74c1a6e5))

# [1.8.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.7.0...v1.8.0) (2024-06-18)


### Features

* **frontend button:** creating a new button component ([e9cae06](https://github.com/luvsscorpius/taskmap-react/commit/e9cae066920e470565fe8bc8e45229674668f72a))
* **frontend themes:** creating themes to operate the frontend ([d8e9156](https://github.com/luvsscorpius/taskmap-react/commit/d8e915628dde512121eae5b760062df00def1b07))

# [1.7.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.6.0...v1.7.0) (2024-06-16)


### Bug Fixes

* **backend tasks:** fixing the bug where it would show all tasks from all users ([bc10313](https://github.com/luvsscorpius/taskmap-react/commit/bc10313c0ebb590a52a36e933ab67384ad27be54))
* **frontend context:** sending an empty array called tasks to database ([54d0be7](https://github.com/luvsscorpius/taskmap-react/commit/54d0be7e84c6f5f10566b8f3b51c6afcfa04c5ad))


### Features

* **backend middlewares:** adding middlewares to backend for a better debug ([01e2a99](https://github.com/luvsscorpius/taskmap-react/commit/01e2a99e60b3a9216f33bc8b9355a651bcfad000))
* **backend:** creating createuser route ([bc7c0ef](https://github.com/luvsscorpius/taskmap-react/commit/bc7c0ef2f3586ea4768b92b65aa8ab18bccab1cc))
* **context:** sending userInfo to database ([87b351a](https://github.com/luvsscorpius/taskmap-react/commit/87b351ac3b72984ea3fe892504ec9efe7fdb9985))
* **frontend:** toastify ([de3d192](https://github.com/luvsscorpius/taskmap-react/commit/de3d1929a6cf05f41ebc8d6e64426d979c22691f))

# [1.6.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.5.0...v1.6.0) (2024-06-08)


### Bug Fixes

* **console:** removing console.logs from context ([8499134](https://github.com/luvsscorpius/taskmap-react/commit/84991347fde314177170722627cf78f4250527d5))


### Features

* **folder architecture:** changing the folder architecture ([aaf6c23](https://github.com/luvsscorpius/taskmap-react/commit/aaf6c23af4990737d186759badf2eef763a2943d))
* **frontend useeffect:** duplicating fetchData on useEffect to get the data again when updating pag ([e4dd637](https://github.com/luvsscorpius/taskmap-react/commit/e4dd637403898960be9ccd510d2cae6c0e856f0c))
* **frontend:** keeping a user logged in ([998b991](https://github.com/luvsscorpius/taskmap-react/commit/998b991ae4d5e13a3f259c2e76f85a8bf0ae59cc))

# [1.5.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.4.0...v1.5.0) (2024-06-07)


### Bug Fixes

* **addtask:** now you can add new tasks on data base ([e77f5cf](https://github.com/luvsscorpius/taskmap-react/commit/e77f5cfaa4f232f3b7ec615e54296f672bf739c5))
* **db.js:** updating form of finding collection login/addtask/db ([aaf1672](https://github.com/luvsscorpius/taskmap-react/commit/aaf1672fcc54339d0ef94cb091670c2a647f445c))
* **updatetask:** using filter task.id and task.$ to update isChecked on data base ([c6e6139](https://github.com/luvsscorpius/taskmap-react/commit/c6e6139d1e072fb8b511951600c4eb33c92213a8))


### Features

* **tasks:** listing tasks from db on taskview ([dbc1f21](https://github.com/luvsscorpius/taskmap-react/commit/dbc1f2186d6b7a96686b746e32f455f9bbe466fb))

# [1.4.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.3.0...v1.4.0) (2024-06-07)


### Features

* **addtask:** creating a new route on backend ([da406d5](https://github.com/luvsscorpius/taskmap-react/commit/da406d5d98fffb23dd2a1557e5ad6a9d621afa49))
* **context:** creating addtask function to create tasks ([71fe2b1](https://github.com/luvsscorpius/taskmap-react/commit/71fe2b1b2b23d82142d51ac1a91d617ecd90243d))
* **update:** merging ([c48e1f5](https://github.com/luvsscorpius/taskmap-react/commit/c48e1f5c5470c959adf1f1bbe1ee7b6ab164a293))

# [1.3.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.2.0...v1.3.0) (2024-06-03)


### Features

* **backend:** modularizando as rotas ([3c7d5de](https://github.com/luvsscorpius/taskmap-react/commit/3c7d5def4578a47b6e7bb5e067404a1436a43216))
* **taskview:** creating the new todo list page ([cfd4775](https://github.com/luvsscorpius/taskmap-react/commit/cfd47750c4d24395331c91faa86b25b7cce93a3f))

# [1.2.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.1.0...v1.2.0) (2024-06-01)


### Features

* **api:** consumindo a api do backend que criamos ([06f6ff2](https://github.com/luvsscorpius/taskmap-react/commit/06f6ff2aa8bf384a0ec08c2756a90e63180de6c9))
* **backend:** creating backend folder ([3b76f9e](https://github.com/luvsscorpius/taskmap-react/commit/3b76f9e1b90c37a0854b03a73efa685a52f989b3))
* **taskview:** creating a new page and making it show the name of the person logged in ([a368a38](https://github.com/luvsscorpius/taskmap-react/commit/a368a38515cd367f1fbfef61059349f0ed50244b))

# [1.1.0](https://github.com/luvsscorpius/taskmap-react/compare/v1.0.0...v1.1.0) (2024-06-01)


### Features

* **context:** creating context ([b70bac0](https://github.com/luvsscorpius/taskmap-react/commit/b70bac0b7bf52ceacca7c17b361845488647a4f7))
* **home:** finishing home page ([b2c1a7c](https://github.com/luvsscorpius/taskmap-react/commit/b2c1a7c47b31e8b6d4e0240eaba13614be62fca8))
* **register:** creating register component ([960a329](https://github.com/luvsscorpius/taskmap-react/commit/960a3293d7640162e88dcdcf79c7d92804bb5c15))

# 1.0.0 (2024-05-31)


### Features

* **initial commit:** starting new repo ([e6862a4](https://github.com/luvsscorpius/taskmap-react/commit/e6862a40efd151efe7a876e876e00615a289cc96))
