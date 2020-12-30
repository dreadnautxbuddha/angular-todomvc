export interface Filter {
  /**
   * The completion filter to be used in displaying the todo-items.
   *
   * @type {'complete' | 'incomplete' | null}
   */
  completion?: 'complete' | 'incomplete';
}

export interface DisplayableFilter extends Filter {
  /**
   * A label for the filter depicting what kind of filter it is, mainly used as an
   * interface for how filters are to be displayed in a template.
   *
   * @type {String}
   */
  label: string;

  /**
   * Determines whether the filter is currently being used to filter the todo-items
   * that are displayed.
   *
   * @type {Boolean}
   */
  isFilterActive: boolean;
}
