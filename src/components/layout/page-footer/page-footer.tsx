"use client";

import Brand from "@/components/ui/brand";
import { Skeleton } from "@/components/ui/skeleton";
import LoadingWrapper from "@/components/util/loading-wrapper";
import { cn } from "@/lib/util";
import { Category, all } from "@/service/category";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface FooterCategoriesProps extends HTMLAttributes<HTMLDivElement> {
  categories: Category[];
}
export interface PageFooterProps extends HTMLAttributes<HTMLDivElement> {}

function FooterList({
  title,
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("space-y-4", className)} {...props}>
      <h1 className="pb-1 w-full border-b-2 text-neutral-300 border-neutral-400/50 md:w-max">
        {title}
      </h1>
      <ul className="text-neutral-400">{children}</ul>
    </section>
  );
}

function FooterListItem({
  className,
  ...props
}: HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn("w-max  font-light hover:text-neutral-300", className)}
      {...props}
    />
  );
}

function FooterInfo() {
  return (
    <section className="flex flex-col items-center text-center gap-4 text-sm font-light text-neutral-300 md:items-start md:text-start">
      <Link href="/">
        <Brand recolor="white" />
      </Link>
      <p className="max-w-80">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div>
        <p className="text-neutral-400">Телефон:</p>
        <p className="text-lg">
          <a href="tel:+71234567890">+7 123 456-78-90</a>
        </p>
      </div>
      <div>
        <p className="text-neutral-400">
          E-Mail:{" "}
          <a className="text-neutral-300" href="mailto:info@bottlebarrel.ru">
            info@bottlebarrel.ru
          </a>
        </p>
      </div>
      <div>
        <p className="text-neutral-400">Мы в соцсетях:</p>
        <ul className="flex gap-4 pt-1">
          <li>
            <Link href="https://vk.com" target="_blank">
              <Image
                src="/images/icons/vk.svg"
                alt="vk"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="https://telegram.org" target="_blank">
              <Image
                src="/images/icons/telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

function FooterCategories({ categories, ...props }: FooterCategoriesProps) {
  return (
    <FooterList title="Категории" {...props}>
      {categories?.map((c, i) => (
        <FooterListItem key={i}>
          <Link className="py-1" href={c.link}>
            {c.name}
          </Link>
        </FooterListItem>
      ))}
    </FooterList>
  );
}

function FooterCategoriesSkeleton() {
  return (
    <FooterList title="Категории">
      {[...Array(5)].map((c, i) => (
        <FooterListItem key={i} className="my-2">
          <Skeleton className="h-4 w-[120px] bg-neutral-300/50" />
        </FooterListItem>
      ))}
    </FooterList>
  );
}

function FooterLinks(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <FooterList title="Клиентам" {...props}>
      <FooterListItem>
        <Link className="py-1" href="/err">
          О нас
        </Link>
      </FooterListItem>
      <FooterListItem>
        <Link className="py-1" href="/err">
          Программа лояльности
        </Link>
      </FooterListItem>
      <FooterListItem>
        <Link className="py-1" href="/err">
          Юридическая информация
        </Link>
      </FooterListItem>
      <FooterListItem>
        <Link className="py-1" href="/err">
          Обратная связь
        </Link>
      </FooterListItem>
      <FooterListItem>
        <Link className="py-1" href="/err">
          Сотрудничество
        </Link>
      </FooterListItem>
    </FooterList>
  );
}

export default function PageFooter({ className, ...props }: PageFooterProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: all,
  });

  return (
    <footer
      className={cn(
        "px-4 py-8 pb-20 grid grid-cols-1 gap-4 bg-primary border-t-4 border-accent md:grid-cols-3 md:pb-8",
        className
      )}
      {...props}
    >
      <FooterInfo />
      <LoadingWrapper
        isLoading={isLoading}
        isError={isError}
        skeleton={<FooterCategoriesSkeleton />}
      >
        <FooterCategories categories={data || []} />
      </LoadingWrapper>
      <FooterLinks />
    </footer>
  );
}
