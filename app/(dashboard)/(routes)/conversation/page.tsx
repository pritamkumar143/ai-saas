'use client';

import * as z from 'zod';
import { MessageSquare } from "lucide-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from "./heading";
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formSchema } from './constants';

// Define the schema for form validation using Zod
const ConversationPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        }
    });

    const isLoading = form.formState.isSubmitting;


    // Function to handle form submission
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log('Form data:', values);
    };

    return (
        <>
            <Heading
                title="Conversation"
                description="Our most advanced conversation model"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className='col-span-12 lg:col-span-10'>
                                        <FormControl className='m-0 p-0'>

                                            <Input
                                                className='border-0 outline-none focus-visible:ring-0 focus-visibile:ring-transparent'
                                                disabled={isLoading}
                                                placeholder="How do  I calculate the size of the outline of a circle?"
                                                {...field}
                                            />

                                        </FormControl>

                                    </FormItem>

                                )}
                            />
                            <Button className='col-span-12 lg:col-span-2 w-full '
                            disabled={isLoading}>
                                Generate
                            </Button>

                        </form>
                    </Form>
                </div>
                <div className='space-y-4'>
                    Message content
                </div>

            </div>
        </>
    );
};

export default ConversationPage;
