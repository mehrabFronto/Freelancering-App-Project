import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import useCategories from "../../hooks/useCategories";
import DatePickerField from "../../ui/DatePickerField";
import Loading from "../../ui/Loading";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";

const CreateProjectForm = ({ onClose, projectToEdit = {} }) => {
   const { _id: editId } = projectToEdit;
   const isEditingSession = Boolean(editId);

   let editValues = {};

   const {
      title,
      description,
      budget,
      category,
      deadline,
      tags: prevTags,
   } = projectToEdit;

   if (isEditingSession) {
      editValues = {
         title,
         description,
         budget,
         deadline,
         category: category._id,
         tags: prevTags,
      };
   }

   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm({ defaultValues: editValues });

   const [tags, setTags] = useState(prevTags || []);
   const [date, setDate] = useState(new Date(deadline || ""));

   const { categories } = useCategories();

   const { createNewProject, isCreating } = useCreateProject();
   const { editProject, isEditing } = useEditProject();

   const onSubmit = (data) => {
      const newProject = {
         ...data,
         tags,
         deadline: new Date(date).toISOString(),
      };

      if (isEditingSession) {
         editProject(
            { id: editId, newProject },
            {
               onSuccess: () => {
                  onClose();
                  reset();
               },
            },
         );
      } else {
         createNewProject(newProject, {
            onSuccess: () => {
               onClose();
               reset();
            },
         });
      }
   };

   return (
      <form
         className="space-y-8"
         onSubmit={handleSubmit(onSubmit)}>
         {/* title input */}
         <TextField
            label="عنوان پروژه"
            name="title"
            register={register}
            required={true}
            validationSchema={{
               required: "عنوان ضروری است",
               minLength: {
                  value: 6,
                  message: "عنوان باید بیشتر از 6 حرف باشد",
               },
               maxLength: {
                  value: 30,
                  message: "عنوان باید کمتر از 30 حرف باشد",
               },
            }}
            errors={errors}
         />

         {/* description input */}
         <TextField
            label="توضیحات پروژه"
            name="description"
            register={register}
            required={true}
            validationSchema={{
               required: "توضیحات ضروری است",
               minLength: {
                  value: 6,
                  message: "توضیحات باید بیشتر از 6 حرف باشد",
               },
               maxLength: {
                  value: 30,
                  message: "توضیحات باید کمتر از 30 حرف باشد",
               },
            }}
            errors={errors}
         />

         {/* budget input */}
         <TextField
            label="بودجه پروژه"
            name="budget"
            register={register}
            required={true}
            validationSchema={{
               required: "بودجه ضروری است",
               min: {
                  value: 10000,
                  message: "بودجه باید بیشتر از 10,000 تومان باشد",
               },
               max: {
                  value: 10000000,
                  message: "بودجه باید کمتر از 10,000,000 تومان باشد",
               },
            }}
            errors={errors}
         />

         {/* categories select option */}
         <RHFSelect
            label="دسته بندی"
            name="category"
            register={register}
            options={categories}
            required={true}
         />

         {/* tags input */}
         <div>
            <label className="mb-2 block text-base font-bold text-secondary-700">
               تگ ها
            </label>
            <TagsInput
               value={tags}
               onChange={setTags}
               name="tags"
            />
         </div>

         <DatePickerField
            label="ددلاین"
            date={date}
            setDate={setDate}
            required={true}
         />

         {isCreating || isEditing ? (
            <Loading />
         ) : (
            <button
               type="submit"
               className="btn btn--primary w-full">
               تایید
            </button>
         )}
      </form>
   );
};

export default CreateProjectForm;
