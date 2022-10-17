import { takeLatest, all, put, call} from "typed-redux-saga/macro";

import { getCategoriesandDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesandDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  ); // nơi nhận action, nếu nhận được một đống action giống nhau thì đưa cho nó cái action latest
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]); // chạy tất cả mọi thứ trong function cho đến khi nó kết thúc
}
