// @flow

type SetUserProgressStepAction = (
  step: number
) => {
  type: "SET_USER_PROGRESS_STEP",
  step: number,
};

export const setUserProgressStepAction: SetUserProgressStepAction = (step) => ({
  type: "SET_USER_PROGRESS_STEP",
  step,
});

export default setUserProgressStepAction;
