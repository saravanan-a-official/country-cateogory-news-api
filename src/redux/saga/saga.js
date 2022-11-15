import { call, put, takeLatest, all } from "redux-saga/effects";
import * as CommonConstants from "../../common/commonConstants";
import * as api from "../../api/getNewsFromAPI";

function* getNewsDataWatcher() {
  yield all([
    takeLatest(CommonConstants.LOAD_HEADLINES_DETAILS, pushHeadlinesToStore),
    takeLatest(CommonConstants.LOAD_BREAKING_NEWS, pushBreakingNewsToStore),
  ]);
}

function* pushHeadlinesToStore(action) {
  const headlineNews = yield call(api.getHeadlines, "");
  yield put({
    type: CommonConstants.GET_HEADLINES_OK,
    payload: headlineNews,
  });
}

function* pushBreakingNewsToStore(action) {
  const breakingNews = yield call(api.getBreakingNews, "");
  yield put({
    type: CommonConstants.GET_BREAKING_NEWS_OK,
    payload: breakingNews,
  });
}

export default getNewsDataWatcher;
