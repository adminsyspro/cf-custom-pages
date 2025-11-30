"use client";

import { Icon } from "@/components/ui/icon";
import { blockPageTranslations } from "@/config/i18n";
import type { BlockPageConfig } from "@/config/routes";
import { Chip } from "@heroui/react";
import Image from "next/image";
import { CFCard } from "./ui/CFCard";
import { CFCardWrap } from "./ui/CFCardWrapper";
import { NetworkStatusBox } from "./ui/NetworkStatusBox";
import { NetworkStatusWrapper } from "./ui/NetworkStatusWrapper";

type CloudflareLogoProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

export const BlockBox = ({
  type,
  code,
  icon,
  networkStatus,
}: BlockPageConfig) => {
  const translation = blockPageTranslations[type];
  return (
    <CFCardWrap>
      <CFCard
        title={translation.title}
        //message={translation.message}
        message={
          <span className="block text-center">{translation.message}</span>
        }
        //subtitle="Security check"
        subtitle={
          <Chip variant="flat" color="danger" size="sm">
            HTTP Error {code}
          </Chip>
        }
        icon={<Icon name={icon} className="h-6 w-6 text-white" />}
        headerClassName="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-gray-900"
        scheme="danger"
      >
        <div className="space-y-6">
          <div className="rounded-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/10 p-4 backdrop-blur-sm border border-red-100 dark:border-red-900/50">
            <div className="font-mono text-sm">
              <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <span className="font-semibold">Your IP:</span>
                <code>::CLIENT_IP::</code>
              </div>

              <div className="flex items-center gap-2 text-red-700 dark:text-red-400 mt-2">
                <span className="font-semibold">Ray ID:</span>
                <code>::RAY_ID::</code>
              </div>
            </div>
          </div>

          <NetworkStatusWrapper>
            <NetworkStatusBox {...networkStatus} />
          </NetworkStatusWrapper>

          {/* Footer avec le logo Cloudflare en PNG */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center">
            <Image
              src="/cloudflare-logo.png"
              alt="Cloudflare"
              width={140} // ajuste si besoin
              height={28} // juste pour le ratio, Next en a besoin
              className="opacity-80"
            />
          </div>
        </div>
      </CFCard>
    </CFCardWrap>
  );
};

export default BlockBox;
