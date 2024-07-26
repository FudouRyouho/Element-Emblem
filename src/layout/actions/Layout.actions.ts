//src\modules\layout\actions\Layout.actions.ts
import { createAction } from "@reduxjs/toolkit";

export const ToggleSection = createAction<String>('layout/ToggleSection')