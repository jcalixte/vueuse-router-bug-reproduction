import { useRouteQuery } from '@vueuse/router';
import { readonly } from 'vue';

export const useQueryParams = () => {
  const test = useRouteQuery('test', undefined, {
    transform: (value) => {
      if (!value) {
        return [];
      }

      return Array.isArray(value) ? value : [value];
    },
  });

  const addTestParam = (testParam) => {
    test.value = [...test.value, testParam];
  };

  return {
    test: readonly(test),
    addTestParam,
  };
};
