import { FormProvider, useForm } from "react-hook-form";

type FormValue = {
  title: string;
  description: string;
};

export default function PostWriteScreen() {
  const postForm = useForm<FormValue>({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  return <FormProvider {...postForm}>123</FormProvider>;
}
