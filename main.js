(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dreadnaut/dev/sandbox/angular-todomvc/src/main.ts */"zUnb");


/***/ }),

/***/ "1oh7":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-input/todo-input.component.ts ***!
  \***************************************************************/
/*! exports provided: TodoInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoInputComponent", function() { return TodoInputComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_store_selectors_input_input_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors/input/input.selector */ "4uRi");
/* harmony import */ var src_app_store_actions_input_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions/input.action */ "ydID");
/* harmony import */ var _store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/todo/todo.actions */ "M/ox");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function TodoInputComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoInputComponent_input_0_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.todoInput = $event; })("keyup", function TodoInputComponent_input_0_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.write(); })("keyup.enter", function TodoInputComponent_input_0_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r0.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.todoInput);
} }
class TodoInputComponent {
    constructor(store) {
        this.store = store;
        /**
         * An input stream.
         *
         * @type {Observable<Input>}
         */
        this.input$ = this
            .store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_selectors_input_input_selector__WEBPACK_IMPORTED_MODULE_3__["input"]), 
        // Similar to the TodoInputComponent::write method, we keep the synchronization
        // between the model and the store by explicitly using its value on the model.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(input => this.todoInput = input.description));
    }
    ngOnInit() {
    }
    /**
     * Writes the input to the store. Instead of injecting the value to be passed to
     * the store, we're specifically using the value of the input's model. This ensures
     * that the model and the store is always in sync.
     *
     * @returns {void}
     */
    write() {
        this.store.dispatch(Object(src_app_store_actions_input_action__WEBPACK_IMPORTED_MODULE_4__["WriteInputAction"])({ description: this.todoInput }));
    }
    /**
     * Creates a new todo item
     *
     * @returns {void}
     */
    submit() {
        this.store.dispatch(Object(_store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_5__["CreateTodoAction"])({
            description: this.todoInput,
            // By default, all newly created todo items are not considered "complete"
            isCompleted: false,
            isEditing: false,
        }));
        // After submitting the todo item, the input must then be cleared, preparing the
        // user to type in another.
        this.store.dispatch(Object(src_app_store_actions_input_action__WEBPACK_IMPORTED_MODULE_4__["WriteInputAction"])({ description: null }));
    }
}
TodoInputComponent.ɵfac = function TodoInputComponent_Factory(t) { return new (t || TodoInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
TodoInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TodoInputComponent, selectors: [["todo-input"]], decls: 2, vars: 3, consts: [["type", "text", "placeholder", "What needs to be done?", "class", "new-todo", 3, "ngModel", "value", "ngModelChange", "keyup", "keyup.enter", 4, "ngIfVal", "ngIf"], ["type", "text", "placeholder", "What needs to be done?", 1, "new-todo", 3, "ngModel", "value", "ngModelChange", "keyup", "keyup.enter"]], template: function TodoInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TodoInputComponent_input_0_Template, 1, 2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.input$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TodoInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'todo-input',
                templateUrl: './todo-input.component.html',
                styleUrls: ['./todo-input.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "4uRi":
/*!*********************************************************!*\
  !*** ./src/app/store/selectors/input/input.selector.ts ***!
  \*********************************************************/
/*! exports provided: input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const input = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.input, input => input);


/***/ }),

/***/ "6Tqq":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/todo/todo.reducer.ts ***!
  \*****************************************************/
/*! exports provided: initialState, TodoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoReducer", function() { return TodoReducer; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/todo/todo.actions */ "M/ox");



const initialState = [];
const TodoReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_2__["CreateTodoAction"], (state, todo) => {
    if ((todo.description || '').trim().length === 0) {
        // If the user has submitted an empty todo item, do nothing. We won't save this
        return state;
    }
    else if (todo.hasOwnProperty('id')) {
        // The id that was supplied already exists. We won't allow this
        return state.map(_todo => _todo.id).includes(todo.id)
            ? state
            : state.concat(todo);
    }
    // When there's no id provided, we'll provide our own.
    return state.concat(Object.assign(Object.assign({}, todo), { id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])() }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateTodoAction"], (state, { id, description, isCompleted, isEditing }) => {
    return state.map(
    // We're only going to update the todo item that matches the id that we have
    // received. Otherwise, we'll update nothing.
    todo => todo.id === id ? { id, description, isCompleted, isEditing } : todo);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_2__["MassDeleteTodoAction"], (state, { todos }) => {
    let ids = todos.map(todo => todo.id);
    return state.filter(todo => ids.includes(todo.id) === false);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteTodoAction"], (state, existingTodo) => {
    return state.filter(todo => todo.id !== existingTodo.id);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_2__["MassToggleTodoCompletionAction"], (state, { isCompleted }) => {
    return state.map(todo => (Object.assign(Object.assign({}, todo), { isCompleted })));
}));


/***/ }),

/***/ "Ahic":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/todo/todo.actions */ "M/ox");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function TodoComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoComponent_input_0_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.todoInput = $event; })("keyup.enter", function TodoComponent_input_0_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.todoInput);
} }
function TodoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TodoComponent_div_1_Template_div_dblclick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.edit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoComponent_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.isCompleted = $event; })("change", function TodoComponent_div_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleCompletion($event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.isCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.todo.description);
} }
class TodoComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.todoInput = this.todo.description;
        this.isCompleted = this.todo.isCompleted;
    }
    /**
     * Gets triggered when a todo item gets clicked or tapped twice. The user will then
     * be able to edit the todo item.
     *
     * @returns {void}
     */
    edit() {
        this.store.dispatch(Object(_store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateTodoAction"])(Object.assign(Object.assign({}, this.todo), { isEditing: true })));
    }
    /**
     * Gets triggered when a user has finished editing a todo item.
     *
     * @returns {void}
     */
    update() {
        this.store.dispatch(Object(_store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateTodoAction"])(Object.assign(Object.assign({}, this.todo), { description: this.todoInput, isEditing: false })));
    }
    /**
     * Marks the todo as either completed or not-completed.
     *
     * @param {Boolean} isCompleted
     *
     * @returns {void}
     */
    toggleCompletion(isCompleted) {
        this.store.dispatch(Object(_store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateTodoAction"])(Object.assign(Object.assign({}, this.todo), { isCompleted: isCompleted })));
    }
    /**
     * Delete the todo, and remove it from the list.
     *
     * @returns {void}
     */
    delete() {
        this.store.dispatch(Object(_store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteTodoAction"])(this.todo));
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["todo"]], inputs: { todo: ["metadata", "todo"] }, decls: 2, vars: 2, consts: [["type", "text", "class", "edit", 3, "ngModel", "ngModelChange", "keyup.enter", 4, "ngIf"], ["class", "view", 3, "dblclick", 4, "ngIf"], ["type", "text", 1, "edit", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "view", 3, "dblclick"], ["type", "checkbox", 1, "toggle", 3, "ngModel", "ngModelChange", "change"], [1, "destroy", 3, "click"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodoComponent_input_0_Template, 1, 1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoComponent_div_1_Template, 5, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.todo.isEditing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.todo.isEditing === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'todo',
                templateUrl: './todo.component.html',
                styleUrls: ['./todo.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['metadata']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "M/ox":
/*!****************************************************!*\
  !*** ./src/app/store/actions/todo/todo.actions.ts ***!
  \****************************************************/
/*! exports provided: CreateTodoAction, UpdateTodoAction, MassDeleteTodoAction, DeleteTodoAction, MassToggleTodoCompletionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoAction", function() { return CreateTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodoAction", function() { return UpdateTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassDeleteTodoAction", function() { return MassDeleteTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodoAction", function() { return DeleteTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassToggleTodoCompletionAction", function() { return MassToggleTodoCompletionAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const CreateTodoAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Create', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UpdateTodoAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Update', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const MassDeleteTodoAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Mass Delete', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteTodoAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Delete', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const MassToggleTodoCompletionAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Mass Toggle Todo Completion', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "OkCu":
/*!*******************************************************!*\
  !*** ./src/app/store/reducers/input/input.reducer.ts ***!
  \*******************************************************/
/*! exports provided: initialState, InputReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputReducer", function() { return InputReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_input_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/input.action */ "ydID");


const initialState = { description: null };
const InputReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_input_action__WEBPACK_IMPORTED_MODULE_1__["WriteInputAction"], (state, input) => input));


/***/ }),

/***/ "RPnm":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_selectors_todo_todo_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/todo/todo.selector */ "Z+gg");
/* harmony import */ var _store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/todo/todo.actions */ "M/ox");
/* harmony import */ var _todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo-input/todo-input.component */ "1oh7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../todo/todo.component */ "Ahic");










function TodoListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TodoListComponent_ng_container_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.toggleCompletion($event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mark all as complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0, a1) { return { completed: a0, editing: a1 }; };
function TodoListComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "todo", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, todo_r5.isCompleted, todo_r5.isEditing));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("metadata", todo_r5);
} }
function TodoListComponent_footer_11_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "1 item left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TodoListComponent_footer_11_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const incompleteTodos_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", incompleteTodos_r8.length, " items left");
} }
function TodoListComponent_footer_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TodoListComponent_footer_11_ng_container_1_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TodoListComponent_footer_11_ng_container_1_span_2_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const incompleteTodos_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", incompleteTodos_r8.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 1);
} }
function TodoListComponent_footer_11_ng_container_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoListComponent_footer_11_ng_container_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const completedTodos_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.delete(completedTodos_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Clear Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TodoListComponent_footer_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TodoListComponent_footer_11_ng_container_3_button_1_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const completedTodos_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", completedTodos_r12.length);
} }
function TodoListComponent_footer_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TodoListComponent_footer_11_ng_container_1_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TodoListComponent_footer_11_ng_container_3_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r2.incompleteTodos$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx_r2.completedTodos$));
} }
class TodoListComponent {
    constructor(store) {
        this.store = store;
        /**
         * A list of the todo-items that the user has provided.
         *
         * @type {Observable<ExistingTodo[]>}
         */
        this.todos$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_selectors_todo_todo_selector__WEBPACK_IMPORTED_MODULE_3__["allTodos"]));
        /**
         * A list of completed todo-items
         *
         * @type {Observable<ExistingTodo[]>}
         */
        this.completedTodos$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_selectors_todo_todo_selector__WEBPACK_IMPORTED_MODULE_3__["completeTodos"]));
        /**
         * A list of incomplete todo-items
         *
         * @type {Observable<ExistingTodo[]>}
         */
        this.incompleteTodos$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_selectors_todo_todo_selector__WEBPACK_IMPORTED_MODULE_3__["incompleteTodos"]));
        /**
         * An observable that emits a boolean value indicating whether there are todo-items
         * on the list including both completed and non-completed items.
         *
         * @type {Observable<boolean>}
         */
        this.hasTodoItems$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_selectors_todo_todo_selector__WEBPACK_IMPORTED_MODULE_3__["allTodos"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(todos => todos.length > 0), 
        // By adding distinctUntilChanged(), we ensure that a boolean value is only
        // emmitted when needed. Once when there's atleast one (1) todo item, and once
        // when there's no todo item. Otherwise, this todo item will emit a value
        // everytime a todo item is added or removed.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    ngOnInit() {
    }
    /**
     * Deletes the completed todo items fron the todo-list.
     *
     * @param {ExistingTodo[]} todos
     *
     * @returns {void}
     */
    delete(todos) {
        this.store.dispatch(Object(_store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_4__["MassDeleteTodoAction"])({ todos }));
    }
    /**
     * Marks all todos as either completed or not-completed.
     *
     * @param {Boolean} isCompleted
     *
     * @returns {void}
     */
    toggleCompletion(isCompleted) {
        this.store.dispatch(Object(_store_actions_todo_todo_actions__WEBPACK_IMPORTED_MODULE_4__["MassToggleTodoCompletionAction"])({ isCompleted }));
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["todo-list"]], decls: 24, vars: 9, consts: [[1, "todoapp"], [1, "header"], [1, "main"], [4, "ngIf"], [1, "todo-list"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "footer", 4, "ngIf"], [1, "info"], ["href", "https://github.com/dreadnautxbuddha"], ["href", "https://angular.io/"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all", 3, "change"], ["for", "toggle-all"], [3, "ngClass"], [3, "metadata"], [1, "footer"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "todo-count", 4, "ngSwitchCase"], ["class", "todo-count", 4, "ngSwitchDefault"], [1, "todo-count"], ["class", "clear-completed", 3, "click", 4, "ngIf"], [1, "clear-completed", 3, "click"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "todo-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TodoListComponent_ng_container_6_Template, 4, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TodoListComponent_li_9_Template, 2, 5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TodoListComponent_footer_11_Template, 5, 6, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Double-click to edit a todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Peter Cortez");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Angular2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, ctx.hasTodoItems$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, ctx.todos$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 7, ctx.hasTodoItems$));
    } }, directives: [_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_5__["TodoInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");



class AppComponent {
    constructor() {
        this.title = 'todomvc-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "todo-list");
    } }, directives: [_components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__["TodoListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Z+gg":
/*!*******************************************************!*\
  !*** ./src/app/store/selectors/todo/todo.selector.ts ***!
  \*******************************************************/
/*! exports provided: allTodos, completeTodos, incompleteTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTodos", function() { return allTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeTodos", function() { return completeTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incompleteTodos", function() { return incompleteTodos; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const all = (state) => state.todos;
const allTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(all, todos => todos);
const completeTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(all, todos => todos.filter(todo => todo.isCompleted));
const incompleteTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(all, todos => todos.filter(todo => todo.isCompleted === false));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo/todo.component */ "Ahic");
/* harmony import */ var _store_reducers_todo_todo_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/reducers/todo/todo.reducer */ "6Tqq");
/* harmony import */ var _store_reducers_input_input_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/reducers/input/input.reducer */ "OkCu");
/* harmony import */ var _components_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/todo-input/todo-input.component */ "1oh7");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot({
                todos: _store_reducers_todo_todo_reducer__WEBPACK_IMPORTED_MODULE_8__["TodoReducer"],
                input: _store_reducers_input_input_reducer__WEBPACK_IMPORTED_MODULE_9__["InputReducer"],
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_10__["TodoInputComponent"],
        _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_11__["TodoListComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_10__["TodoInputComponent"],
                    _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
                    _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_11__["TodoListComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot({
                        todos: _store_reducers_todo_todo_reducer__WEBPACK_IMPORTED_MODULE_8__["TodoReducer"],
                        input: _store_reducers_input_input_reducer__WEBPACK_IMPORTED_MODULE_9__["InputReducer"],
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production,
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ydID":
/*!***********************************************!*\
  !*** ./src/app/store/actions/input.action.ts ***!
  \***********************************************/
/*! exports provided: WriteInputAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteInputAction", function() { return WriteInputAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const WriteInputAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[INPUT] Write', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map